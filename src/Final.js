import React from 'react'
import { useNavigate } from 'react-router-dom'

function Final() {
  const history = useNavigate()

  const sty = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: "17%",
  }
  const btn = {
      background: "none",
      border: "none",
      fontSize: "20px",
      color: "blue",
      cursor: "pointer"
  }

  return (
    <div className="final" style={sty}>
      <div className='receive'>
        <h2>Your details has been recieved</h2>
        <div>
          <p>
            click here to Go to the <button style={btn} onClick={() => history('/')}>homepage</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Final
