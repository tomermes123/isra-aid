import { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import { LinkDetail } from "./components/aid-link";
import "./app.css";

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" title="logo" />
        <p>Hello IsraAid123!</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/links/:linkId" element={<LinkDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
