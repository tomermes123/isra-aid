import styled from 'styled-components'
import { ReactComponent as IsraelIcon } from 'src/israel.svg'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-top: 150px; // Adjust this value as needed
`

const Text = styled.span`
  text-align: right;
  font-family: "GRIFTER", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(89deg, #222532 6.05%, #007bff 120.93%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 20px; // Added margin for spacing between the hero text and subtitle
`

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  max-width: 550px; // Optional: to control the width of the subtitle
  text-align: center;
  margin-top: 10px; // Added margin for spacing between the hero text and subtitle
`

const StyledIsraelIcon = styled(IsraelIcon)`
  width: 50px;
  height: auto;
  margin-left: 15px;
  position: relative;
  top: 10px;
`

export function HeroSection () {
  return (
    <Hero>
      <div>
        <Text>Support Israel's Resilience</Text>
        <StyledIsraelIcon />
      </div>
      <Subtitle>
        Donate to organizations aiding in the nation's defense and the
        population, to contribute to a stronger future.
      </Subtitle>
    </Hero>
  )
}
