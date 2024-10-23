import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElemnt = document.getElementById('root');
const reactRoot = createRoot(rootElemnt)

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
