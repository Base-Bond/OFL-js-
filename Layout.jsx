import React from 'react'
import { Outlet, Link } from "react-router-dom";
import WalletConnect from './src/components/WalletConnect';

function Layout() {
    return (
        <>
            <nav>
                <ul className='flex justify-between items-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
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