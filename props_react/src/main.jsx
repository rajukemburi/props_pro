import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App,Profile} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile/>
  </StrictMode>,
)
