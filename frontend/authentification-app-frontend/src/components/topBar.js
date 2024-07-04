import React from 'react'
import '../css/components/topBar.scss'
import logo from '../images/auth-logo.svg'
import avatar from '../images/avatar.jpg'

function topBar({onclick}) {
  return (
    <div>
       <div className='topBar-container'>
        <div className="logo">
          <img src={logo} alt='logo-dev' />
          <span>devchallenges</span>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar-img" onClick= {onclick} />
        </div>
      </div>
    </div>
  )
}

export default topBar
