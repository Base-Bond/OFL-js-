import { useState } from 'react';
import Homepage from './components/Homepage';
import HealthDetails from './components/HealthDetails';
import './App.css'
import '@coinbase/onchainkit/styles.css'
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

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

function App( {children }) {

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        {/* <WalletConnect /> */}
        {/* <Homepage /> */}
        <HealthDetails />
      </WagmiProvider>
    </>
  )
}

export default App
