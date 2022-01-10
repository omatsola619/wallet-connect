import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './WalletHeader.css'

function WalletHeader() {
    const history = useNavigate()

    return (
        <div className='wallet-header'>
            <div class="top">
                <button class="back" onClick={() => history(-1)}>{`<<Back`}</button>
                <img src="https://idapp-token.com/_nuxt/img/logo-dark.618a429.png" alt="" /> 
                <div></div>
            </div>
        </div>
    )
}

export default WalletHeader
