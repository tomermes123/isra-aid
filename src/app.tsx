import styled from 'styled-components'
import { TopMenu } from './components/TopMenu'
import { HeroSection } from './components/HeroSection'
import { ItemSection } from './components/ItemSection'
import { HowItWorks } from './components/HowItWorks'

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(209deg, #EEF6FF -20.22%, #FFF 89.32%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export function App() {
  return (
    <AppContainer>
      <TopMenu />
      <HeroSection />
      <ItemSection />
      <HowItWorks />
    </AppContainer>
  )
}
