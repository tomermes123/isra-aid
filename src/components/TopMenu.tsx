import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from 'src/logo.svg'

interface TopMenuProps {
  scrolled: boolean;
}

const TopMenuContainer = styled.div<TopMenuProps>`
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
  width: 80px;
  height: auto;
`

const Links = styled.div`
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
`

export function TopMenu() {
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <TopMenuContainer scrolled={scrolled}>
      <Logo />
      <Links>
        <a href='#how-it-works'>How it works?</a>
        <a href='#about-us'>About Us</a>
        <a href='#contact-us'>Contact Us</a>
      </Links>
    </TopMenuContainer>
  )
}
