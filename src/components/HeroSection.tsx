import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  display: flex;
  flex-direction: column;  // Updated to column to stack the hero text and subtitle vertically
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  text-align: right;
  font-family: 'GRIFTER', sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(89deg, #222532 6.05%, #007BFF 120.93%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 20px;  // Added margin for spacing between the hero text and subtitle
`

const Flag = styled.span`
  font-size: 56px;
  line-height: normal;
  margin-left: 10px;
`

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 0.60);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%; 
  max-width: 800px;  // Optional: to control the width of the subtitle
  text-align: center;
  margin-top: 20px;  // Added margin for spacing between the hero text and subtitle
`

export function HeroSection () {
  return (
    <Hero>
      <div>
        <Text>Support Israel's Resilience</Text><Flag>🇮🇱</Flag>
      </div>
      <Subtitle>
        Purchase local products and services, or donate to organizations aiding in the nation's defense, to contribute to a stronger future.
      </Subtitle>
    </Hero>
  )
}
