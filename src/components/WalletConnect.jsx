import React from 'react';
import './WalletConnect.css';
import '@coinbase/onchainkit/styles.css'

import { 
    ConnectWallet, 
    Wallet, 
    WalletDropdown, 
    WalletDropdownLink, 
    WalletDropdownDisconnect, 
  } from '@coinbase/onchainkit/wallet'; 

import {
    Address,
    Avatar,
    Name,
    Identity,
    EthBalance,
  } from '@coinbase/onchainkit/identity';

import { color } from '@coinbase/onchainkit/theme';

function WalletConnect() {
  return (
    <div className="walletconnect">
      <Wallet>
        <ConnectWallet className='w-2 h-2'>
          <Avatar/>
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
            <EthBalance />
          </Identity>
          <WalletDropdownLink className='hover:bg-blue-200' icon="wallet" href="https://wallet.coinbase.com">
            Wallet
          </WalletDropdownLink>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  )
}

export default WalletConnect