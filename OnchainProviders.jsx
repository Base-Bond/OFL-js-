'use client';
import {base} from 'viem/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {WagmiProvider} from 'wagmi';
import { wagmiConfig}  from './wagmi';
import { OnchainKitProvider } from "@coinbase/onchainkit";

const quertyClient = new QueryClient();
// const apiKey = import.meta.env.VITE_ONCHAINKIT_API_KEY;

export function OnchainProviders({ children }){

    return(
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={quertyClient}>
                <OnchainKitProvider apiKey={apiKey}
                chain={base}>
                    {children}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
