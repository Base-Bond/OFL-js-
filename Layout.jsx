import React from 'react'
import { Outlet, Link } from "react-router-dom";
import WalletConnect from './src/components/WalletConnect';
import { useAccount } from 'wagmi'

function Layout() {

    const account = useAccount()

    return (
        <>
            <nav style={
                {
                    padding: "1rem",
                }
            } className='fixed top-0 left-0 w-full bg-blue-500 z-50'>
                <ul className='flex justify-between items-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        account.address != null ? (
                            <li>
                                <Link to="/dashboard">dashboard</Link>
                            </li>
                        ) : null
                    }
                    <li>
                        <WalletConnect />
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout