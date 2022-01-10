import React, { useEffect } from 'react'
import './Wallet.css'
import WalletBody from './WalletBody'
import WalletHeader from './WalletHeader'

function Wallet() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wallet">
      <WalletHeader />
      <WalletBody />
    </div>
  )
}

export default Wallet
