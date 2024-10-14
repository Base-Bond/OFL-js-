import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import HealthDetails from './components/HealthDetails';
import './App.css'
import '@coinbase/onchainkit/styles.css'
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import Layout from '../Layout'

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'healthonchain',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

function App({ children }) {

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="dashboard" element={<HealthDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WagmiProvider>
    </>
  )
}

export default App
