import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from 'src/assets/IsraelAid.svg'
import { ReactComponent as HamburgerIcon } from '../assets/hamburger.svg'

interface TopMenuProps {
  scrolled: boolean;
}

const TopMenuContainer = styled.div<TopMenuProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 20px;
  z-index: 1000;
  box-sizing: border-box;
  background-color: ${props => props.scrolled ? '#fff' : 'transparent'};
  transition: background-color 0.3s ease;
`

const Logo = styled(LogoIcon)`
  width: 90px;
  height: auto;
`

const Links = styled.div<{isOpen: boolean}>`
  display: flex;
  gap: 10px;

  a {
    color: rgba(0, 0, 0, 0.60);
    text-align: right;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 132%;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }

  }


  @media (max-width: 768px) {
    position: fixed; // changed from absolute to fixed
    top: 0; // changed from 100% to 0
    left: ${props => (props.isOpen ? '0' : '-100%')}; // changed from 100% to -100%
    padding: 60px 20px 20px; // increased top padding
    flex-direction: column;
    background: #fff;
    height: 100%;
    width: 80%; // reduced width to 80%
    transition: left 0.3s ease-in-out; // added ease-in-out transition
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); // added shadow for a better visual effect

    a {
      margin-bottom: 20px; // added bottom margin for spacing
      font-size: 18px; // increased font size
      color: #333; // changed color to a darker shade for better visibility
      &:hover {
        color: #007bffe3; // added hover color change
      }
    }
  }
`

const Hamburger = styled(HamburgerIcon)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-shrink: 0;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export function TopMenu () {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, toggle] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    toggle(!isOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <TopMenuContainer scrolled={scrolled}>
      <LogoWrapper onClick={scrollToTop}>
        <Logo />
      </LogoWrapper>
      <Hamburger onClick={toggleMenu} />
      <Links isOpen={isOpen}>
        <a onClick={toggleMenu} href='#how-it-works'>
          How it works?
        </a>
        <a onClick={toggleMenu} href='#about-us'>
          About Us
        </a>
        <a onClick={toggleMenu} href='#contact-us'>
          Contact Us
        </a>
      </Links>
    </TopMenuContainer>
  )
}
