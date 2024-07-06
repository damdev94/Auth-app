import React, {useEffect} from 'react'
import { useAuth } from '../functions/auth/authContext'
import '../css/components/topBar.scss'
import logo from '../images/auth-logo.svg'


function TopBar({onclick}) {

  const { userInfos } = useAuth()

  return (
    <div>
       <div className='topBar-container'>
        <div className="logo">
          <img src={logo} alt='logo-dev' />
          <span>devchallenges</span>
        </div>
        <div className="avatar">
          <img src={userInfos && (`http://localhost:5000${userInfos.photo}`)} alt="avatar-img" onClick= {onclick} />
        </div>
      </div>
    </div>
  )
}

export default TopBar
