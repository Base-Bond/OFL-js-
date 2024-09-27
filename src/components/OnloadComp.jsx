import React, { useState } from 'react'
import Typical from 'react-typical'
import './OnloadComp.css'

function OnloadComp() {

    const [newToBase, setNewToBase] = useState(null)


    const handleNewToBase = ()=>{
        setNewToBase('first')
    }

    const handleBaseMaxi = () =>{
        setNewToBase('second')
    }

  return (
    <div className="defprompt">
        {
            !newToBase ? (
                <div className="new">
                    <p className="question">
                        Are you new to BASE?
                    </p>
                    <button onClick={handleNewToBase}>yes</button>
                    <button onClick={handleBaseMaxi}>no</button>
                </div>
            ) : newToBase === 'first' ? (
                <Typical className='intro' steps={['Welcome to BASE, the next-generation Ethereum Layer 2 network! Base is built to offer fast, low cost, and secure transactions for everyone, whether you are new to Web3 or a seasoned blockchain explorer. With Base you access decentralized apps (dapps), transfer assets quickly with low fees, and explore new opportunities in a secure and scalable ecosystem. Ready to dive in? Start by clicking the "Connect Wallet" button at the top right of your screen', 1000]} wrapper='p' />
            ) : (
                <div className='sugg'>
                    <p className="sugg1">Get real time insights on your wallet</p>
                    <p className="sugg2">Whats popping on the base ecosystem right now</p>
                </div>
            )
        }

    </div>
  )
}

export default OnloadComp