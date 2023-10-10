import styled from 'styled-components'
import { TopMenu } from './components/TopMenu'
import { HeroSection } from './components/HeroSection'
import { ItemSection } from './components/ItemSection'

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(209deg, #EEF6FF -20.22%, #FFF 89.32%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export function App () {
  return (
    <AppContainer>
      <TopMenu />
      <HeroSection />
      <ItemSection />
    </AppContainer>
  )
}

export function App () {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/links/:linkId' element={<LinkDetail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
