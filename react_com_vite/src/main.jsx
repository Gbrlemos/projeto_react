import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Lista from './Lista.jsx'
import Tabela from './Tabela'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Lista />
    <Tabela />
  </StrictMode>,
)
