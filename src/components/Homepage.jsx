import React, {useEffect} from 'react'
import WalletConnect from './WalletConnect'
import { useNavigate } from 'react-router-dom'
import {useAccount} from 'wagmi'
import docimg from '../assets/policy.png'

function Homepage() {

  const navigate = useNavigate()
  const account = useAccount()

  // useEffect(()=>{
  //   if(account.address == null){
  //     alert('Connect wallet to view dashboard')
  //   }else{
  //     navigate("/dashboard")
  //   }
  // },[])

 

  return (
    <div className='flex justify-center items-center flex-col mt-20'>
      <h1 className='font-bold'>MedLedger</h1>
      <p className=''>At Medledger, we believe in empowering individuals to take full control of their health data. <br /> This platform allows you to securely store and manage your pesonal health information and mint it as a Non Fungible Token (NFT). Ensuring that your data is private, tamper proof, and accessible only by you or those you chose to share it with. In an economy where traditonal data loss is a problem, this solution resolves it to the bearest minimum  </p>
      <h3 className='text-3xl font-bold mb-2'
      >Connect your wallet</h3>
      <WalletConnect />
      <div>
        Privacy Policy & Terms of Service
      </div>
      <img className='w-32 absolute bottom-0 left-0' src={docimg} alt="docphoto" />
    </div>
  )
}

export default Homepage