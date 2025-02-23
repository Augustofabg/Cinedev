import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/routes.jsx'
import GlobalStyle from '../src/styles/globalstyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
)
