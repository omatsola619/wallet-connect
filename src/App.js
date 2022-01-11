import React from 'react'
import Main from './Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Wallet from './wallet/Wallet'
import WalletDetails from './wallet/WalletDetails'
import Final from './Final'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/:id" element={<WalletDetails />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
