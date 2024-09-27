import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OnchainProviders } from '../OnchainProviders'
import '@coinbase/onchainkit/styles.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <OnchainProviders>
      <App />
  </OnchainProviders>
)
