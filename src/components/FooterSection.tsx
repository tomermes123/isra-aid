import React from 'react'
import styled from 'styled-components'
import backgroundFooter from '../assets/background-footer.png'
import logo from '../assets/IsraelAid-light.png'
import facebookLogo from '../assets/facebook.svg'

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 140px 0;
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundFooter}) no-repeat center center/cover;
`

const FooterContent = styled.div`
  z-index: 1;
  text-align: center;
`

const StyledText = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 1.3;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0;
  padding: 10px 0; // Added padding

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`

const StyledTextSmall = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: white;
  margin-bottom: 30px;
  padding: 10px 0; // Added padding

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const SocialIcon = styled.img`
  cursor: pointer;
  width: 40px; // Adjust the size as needed
  height: auto;
`

export function FooterSection () {
  return (
    <Footer id='footer'>
      <FooterContent>
        <img src={logo} alt='IsraelAid Logo' style={{ maxWidth: '100%', height: 'auto' }} />
        <StyledText>
          Let’s make Israel
          <br /> stronger together
        </StyledText>
        <StyledTextSmall>israaid71023@gmail.com</StyledTextSmall>
        <SocialIcon
          src={facebookLogo}
          alt='Facebook Logo'
          onClick={() => window.open('https://www.facebook.com/groups/308278374859148', '_blank')}
        />
      </FooterContent>
    </Footer>
  )
}
