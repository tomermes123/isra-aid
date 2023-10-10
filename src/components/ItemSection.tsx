import styled from 'styled-components'
import Grid from './Grid'
import { Card, Image, Title, Subtitle } from './Card'
import { useState, useEffect } from 'react'

const Section = styled.div`
  width: 100%;
  padding: 50px;
`

const SearchContainer = styled.div`
  display: flex;
  width: 360px;
  margin: 0 auto;
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  background: #fff;
`

const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  ::placeholder {
    text-align: center;
  }
`

const PUBLIC_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPdI4qel6Otm_7quhDQ-xuTo9UzdkL8Rf0iLbmyVzJ67_TsdXwt_Qagn52ji4UiWslkU1MCnCPo2qV/pub?gid=0&single=true&output=csv'

function parseCSV (text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell: string = ''
  let insideQuotes: boolean = false

  for (let i = 0; i < text.length; i++) {
    const char: string = text[i]
    const nextChar: string = text[i + 1]

    // Toggle insideQuotes flag if the current character is a double quote
    if (char === '"') {
      insideQuotes = !insideQuotes
      continue
    }

    // Check for cells enclosed in double quotes
    if (insideQuotes) {
      cell += char
    } else {
      switch (char) {
        case ',':
          row.push(cell.trim())
          cell = ''
          break
        case '\n':
          if (nextChar === '\r') {
            i++ // Handle CRLF newlines
          }
          row.push(cell.trim())
          rows.push(row)
          cell = ''
          row = []
          break
        default:
          cell += char
      }
    }
  }

  // Add any remaining data
  if (cell.trim()) row.push(cell.trim())
  if (row.length) rows.push(row)

  return rows
}

async function fetchDataFromPublicSheet (): Promise<
  { [key: string]: string }[] | undefined
  > {
  try {
    const response: Response = await fetch(PUBLIC_SHEET_URL)
    const csvText: string = await response.text()
    console.log(csvText)
    const rows: string[][] = parseCSV(csvText)

    // Extract headers
    const headers: string[] = rows[0]

    // Convert rows to objects
    const objects: { [key: string]: string }[] = rows.slice(1).map((row) => {
      const obj: { [key: string]: string } = {}
      row.forEach((cell, index) => {
        obj[headers[index]] = cell
      })
      return obj
    })

    return objects
  } catch (error) {
    console.error('Error fetching and parsing data:', error)
  }
}

export function ItemSection () {
  const [items, setItems] = useState<any[]>([])
  useEffect(() => {
    fetchDataFromPublicSheet().then((items) => setItems(items || []))
  }, [])

  return (
    <Section>
      <SearchContainer>
        <SearchIcon
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
        >
          <path
            d='M10.0192 15.7589C8.31154 15.7589 6.86539 15.1666 5.68079 13.982C4.49618 12.7974 3.90387 11.3512 3.90387 9.64355C3.90387 7.93587 4.49618 6.48971 5.68079 5.3051C6.86539 4.1205 8.31154 3.5282 10.0192 3.5282C11.7269 3.5282 13.1731 4.1205 14.3577 5.3051C15.5423 6.48971 16.1346 7.93587 16.1346 9.64355C16.1346 10.3576 16.0147 11.0397 15.775 11.6897C15.5352 12.3397 15.2153 12.9051 14.8153 13.3858L20.5692 19.1397C20.7077 19.2782 20.7785 19.4522 20.7817 19.6618C20.7849 19.8714 20.7141 20.0487 20.5692 20.1935C20.4243 20.3384 20.2487 20.4108 20.0423 20.4108C19.8359 20.4108 19.6603 20.3384 19.5154 20.1935L13.7615 14.4397C13.2615 14.8525 12.6865 15.1756 12.0365 15.4089C11.3865 15.6422 10.7141 15.7589 10.0192 15.7589ZM10.0192 14.2589C11.3077 14.2589 12.399 13.8118 13.2933 12.9176C14.1875 12.0234 14.6346 10.932 14.6346 9.64355C14.6346 8.35508 14.1875 7.26373 13.2933 6.3695C12.399 5.47527 11.3077 5.02815 10.0192 5.02815C8.73075 5.02815 7.6394 5.47527 6.74517 6.3695C5.85095 7.26373 5.40384 8.35508 5.40384 9.64355C5.40384 10.932 5.85095 12.0234 6.74517 12.9176C7.6394 13.8118 8.73075 14.2589 10.0192 14.2589Z'
            fill='black'
          />
        </SearchIcon>
        <SearchInput placeholder='Search for a service or a product' />
      </SearchContainer>
      <Grid>
        {items.map((item, index) => (
          <Card key={index}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}
