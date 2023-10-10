import React from 'react'
import styled from 'styled-components'
import backgroundFooter from '../assets/background-footer.png'
import logo from '../assets/IsraAid.png'
import facebookLogo from '../assets/facebook.svg'

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 798px;
  width: 100%;
  margin-top: 20px;
`

const Background = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0));
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0));
`

const FooterContent = styled.div`
  z-index: 1;
`

const StyledText = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 73.92px;
  text-align: center;
  color: white;
  text-transform: uppercase;
`

const StyledTextSmall = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 73.92px;
  text-align: center;
  color: white;
`

const SocialIcon = styled.img`
  cursor: pointer;
`

export function FooterSection () {
  return (
    <Footer id='contact-us'>
      <Background src={backgroundFooter} alt='background' />
      <Gradient />
      <FooterContent>
        <img src={logo} />
        <StyledText>
          Let’s make Israel
          <br /> stronger together
        </StyledText>
        <StyledTextSmall>israaid71023@gmail.com</StyledTextSmall>
        <SocialIcon
          src={facebookLogo}
          onClick={(e: any) =>
            window.open(
              'https://www.facebook.com/groups/308278374859148',
              '_blank',
            )}
        />
      </FooterContent>
    </Footer>
  )
}
