import React from 'react'
import { Link } from 'react-router-dom';
import Logos from '../assets/img/logoahabs.png'
const Logo = () => {
  return (
    <div className="header-left">
    <Link to="/" className="logo">
        <img src={Logos} width="35" height="35" alt=""/> <span style={{color:"#449cc0"}}>Ahabs</span>
    </Link>
</div>
  )
}

export default Logo