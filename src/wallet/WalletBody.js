import React, { useEffect } from 'react'
import './WalletBody.css'
import data from './data/data.json'
import { Link } from 'react-router-dom'

function WalletBody() {

  return (
    <div className="wallet-body">
      <h2>Connect Wallet</h2>
      <p className="wallet-info">
        Multiple iOS and Android wallets support the WalletConnect protocol.
        Interaction between mobile apps and mobile browsers are supported via
        mobile deep linking.
      </p>
      <div class="intro">
        <p>Select Your Wallet Below :</p>
      </div>

      <div class="wallet-cards">
        {data.map((item) => (
          <Link to={`/wallet/${item.id}`} class="card-item" key={item.id}>
            <img src={item.url} id="icon" alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default WalletBody
