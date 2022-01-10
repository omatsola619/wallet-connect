import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className="info">
      <div class="item">
        <h3>What is WalletConnect?</h3>
        <p>
          WalletConnect is an open source protocol for connecting decentralised
          applications to mobile wallets with QR code scanning or deep linking.
          A user can interact securely with any DApp from their mobile phone,
          making WalletConnect wallets a safer choice compared to desktop or
          browser extension wallets.
        </p>
      </div>

      <div class="item">
        <h3>How does it work?</h3>
        <p>
          WalletConnect connects web applications to supported mobile wallets.
          WalletConnect session is started by a scanning a QR code (desktop) or
          by clicking an application deep link (mobile).
        </p>
      </div>

      <div class="item">
        <h3>How do I install WalletConnect?</h3>
        <p>
          WalletConnect is not an app, but a protocol supported by many
          different decentralised applications and wallets. Install any of
          mobile wallets supporting WalletConnect protocol. WalletConnect
          wallets are available for Android and iPhone.
        </p>
      </div>

      <div class="item">
        <h3>Is there a token?</h3>
        <p>
          There is no token. WalletConnect protocol does not run on a blockchain
          and there are no fees.
        </p>
      </div>

    </div>
  )
}

export default Info
