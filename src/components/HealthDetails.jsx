import React from 'react'
import TransactComp from '../components/TransactComp'

function HealthDetails() {
  return (
    <div>
        <h1>
        HealthDetails
        </h1>
        <TransactComp />

        <div style={
            {
                margin: "2rem",
                padding: "1rem, 2rem, 1rem, 2rem",
                border: "1px solid grey"
            }
        }>
            
        </div>
    </div>
  )
}

export default HealthDetails