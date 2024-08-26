import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders><Routes></Routes></AuthProviders>
  </StrictMode>,
)
