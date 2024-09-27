import { useState } from 'react';
import Joyride from 'react-joyride'
import WalletConnect from './components/WalletConnect';
// import TestFrame from './components/TestFrame';
import ChatBox from './components/ChatBox';
import OnloadComp from './components/OnloadComp';
import logo from './assets/baseai.png'
import './App.css'
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainvote',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

function App() {

  const [steps] = useState([
    {
      target: '.step-1',  // CSS selector of the component to highlight
      content: 'Connect your wallet here!',
    },
    {
      target: '.step-2',
      content: 'Prompt me here if you need to know anything about BASE.',
    },
    // {
    //   target: '.step-3',
    //   content: 'Here’s where you can connect your wallet.',
    // },
  ]);

  return (
    <div>

      <div className="">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className='step-1'>
        <WalletConnect />
      </div>
      <div className="container">
        <h1>Ask me anything about BASE</h1>
      </div>
      <OnloadComp />
      {/* <TestFrame /> */}
      <div className='step-2'>
        <ChatBox />
      </div>

      <Joyride
        steps={steps} // Pass the steps
        continuous={true}  // Allows moving between steps
        showSkipButton={true}  // Adds a Skip button
        showProgress={true}  // Adds step counter
        styles={{
          options: {
            zIndex: 10000,  // Make sure Joyride elements are above everything
            primaryColor: '#3498db',  // Change tooltip button color
            textColor: '#333',  // Change text color
            overlayColor: 'rgba(0, 0, 0, 0.5)',  // Change overlay color
            width: 250,
          },
          spotlight: {
            borderRadius: '10px',  // Change the shape of the spotlight
          },
        }}
      />

    </div>
  )
}

export default App
