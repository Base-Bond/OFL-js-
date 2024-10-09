import React, { useCallback } from 'react'
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { 
  Transaction, 
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction'; 
// import { LifeCycleStatus } from '@coinbase/onchainkit/transaction';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import { contracts } from '../../contracts';
import '@coinbase/onchainkit/styles.css'

function TransactComp() {
    const { address } = useAccount();
  
    const handleOnStatus = useCallback((status) => {
      console.log('LifecycleStatus', status);
    }, []);
   
    return address ? (
      <Transaction
        chainId={84532}
        contracts={contracts}
        onStatus={handleOnStatus}
      >
        <TransactionButton text='mint' className='h-2 w-2' />
        <TransactionSponsor />
        <TransactionStatus>
          <TransactionStatusLabel />
          <TransactionStatusAction />
        </TransactionStatus>
      </Transaction>  
    ) : (
      <Wallet>
        <ConnectWallet>
          <Avatar className='h-2 w-2' />
          <Name />
        </ConnectWallet>
      </Wallet>
    );
}

export default TransactComp