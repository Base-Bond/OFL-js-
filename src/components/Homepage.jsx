import React, { useEffect } from 'react'
import WalletConnect from './WalletConnect'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'
import okitlogo from '../../src/assets/okitlogo.png'
import reactlogo from '../../src/assets/react.svg'
import TransactComp from './TransactComp'

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
    <div className='flex justify-center items-center flex-col gap-10'>

      <div className='flex justify-center items-center gap-5 mt-20'>
        <img className='w-20' src={okitlogo} alt="" />
        <img className='w-24' src={reactlogo} alt="" />

      </div>

      <div className='flex justify-center items-center gap-10'>
      <div className='flex justify-center items-center flex-col mt-20 border-2 border-blue-600 p-5'>
        <h3 className='text-3xl font-bold mb-2'
        >Connect your wallet</h3>
        <WalletConnect />
      </div>

      <div className='flex justify-center items-center flex-col mt-20 border-2 border-blue-600 p-5'>
        <h3 className='text-3xl font-bold mb-2'>
          Simulate a Transaction
        </h3>
        <TransactComp />
      </div>
      </div>

    </div>
  )
}

export default Homepage