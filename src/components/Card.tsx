import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
`

const Title = styled.h3`
  font-size: 24px;
  margin: 10px;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin: 10px;
`

export { Card, Image, Title, Subtitle }
