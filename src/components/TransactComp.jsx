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

function TransactComp() {
    const { address } = useAccount();
    const BASE_SEPOLIA_CHAIN_ID = 84532;
  
    const handleOnStatus = useCallback((status) => {
      console.log('LifecycleStatus', status);
    }, []);
   
    return address ? (
      <Transaction
        chainId={BASE_SEPOLIA_CHAIN_ID}
        contracts={contracts}
        onStatus={handleOnStatus}
      >
        <TransactionButton />
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