import React from 'react'
import './Links.css'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div className='links'>
            <Link to='/wallet'><button>Rectification</button></Link>
            <Link to='/wallet'><button>Validation</button></Link>
            <Link to='/wallet'><button>Recovery</button></Link>
            <Link to='/wallet'><button>Syncing</button></Link>
            <Link to='/wallet'><button>Others</button></Link>
        </div>
    )
}

export default Links
