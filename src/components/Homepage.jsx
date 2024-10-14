import React from 'react'
import WalletConnect from './WalletConnect'

function Homepage() {
  return (
    <div>
        <h1>MedLedger</h1>

        <h3 style={
          {
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: "left",
            marginBottom: "2rem"
          }
        }>Connect your wallet</h3>
        <div style={
            {
                border: "1px solid grey",
                width: "30rem",
                padding: "0.5rem",
                borderRadius: ".5rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "13rem"

            }
        }>
            <WalletConnect />
            <div>
              {">"}
            </div>
        </div>
        <div>
          Privacy Policy & Terms of Service
        </div>

    </div>
  )
}

export default Homepage