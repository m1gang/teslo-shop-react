import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TesloShoApp } from './TesloShoApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloShoApp />
  </StrictMode>,
)
