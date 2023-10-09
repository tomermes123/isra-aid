import { useState } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom'
import './app.css'

export type AidLink = {
  id: string;
  name: string;
  content: string;
};

export const links: AidLink[] = [
  { id: 'abc', name: 'first-link', content: 'This is the first link.' },
  { id: 'def', name: 'second-link', content: 'This is the second link.' },
  // ... add more link as needed
]

const LinkDetail: React.FC = () => {
  const { linkId } = useParams<{ linkId: string }>()

  const link: AidLink | undefined = links.find((l) => l.id === linkId)

  if (!link) return <div>Link not found!</div>

  return (
    <div>
      <h2>{link.name}</h2>
      <p>{link.content}</p>
    </div>
  )
}

const Home: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo className='App-logo' title='logo' />
        <p>Hello IsraAid123!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
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
