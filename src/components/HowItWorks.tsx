import { memo } from 'react'
import styled from 'styled-components'
import { ReactComponent as HowItWorksImage } from '../assets/how-it-works.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  max-width: 1400px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h2`
  font-size: 40px;
  text-align: start;
  margin: 0px;
`

const Description = styled.p`
  color: rgba(0, 0, 0, 0.60);
  font-size: 24px;
  text-align: start;
`

const Image = styled(HowItWorksImage)`
  max-width: 560px;
`

export const HowItWorks = memo(() => {
  return (
    <Container id='how-it-works'>
      <Information>
        <Heading>
          How it works?
        </Heading>
        <Description>
          We only utilize <strong>confirmed and reputable donation channels in Israel</strong>, which are thoroughly vetted by our team. After that, we upload them here so you can easily click a link and donate.
        </Description>
      </Information>
      <Image />
    </Container>
  )
})
