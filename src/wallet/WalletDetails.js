import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from './data/data.json'
import WalletHeader from './WalletHeader'
import './WalletDetails.css'
import WalletForm from './WalletForm'

function WalletDetails() {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <WalletHeader />
      <div class="wallets-img">
        {data.map((items) => {
          if (id === items.id) {
            return (
              <div className="dy-content">
                <img src={items.url} alt="" />
                <p className="dy-name">{`Import ${items.name} Wallet`}</p>
                <WalletForm name={items.name} />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default WalletDetails
