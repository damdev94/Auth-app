import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/auth-logo.svg'
import ValidateButton from '../validateButton'
import '../../css/components/auth/logContainer.scss'

function LogContainer() {
  return (

    <div className='log-container'>

      <div className='logo'>
        <img src={logo} alt='logo-dev' />
        <span>devchallenges</span>
      </div>

      <div className="presentation-text">
        <p>Join thousands of learners from around the world</p>
      </div>

      <div className="title-page">
        <p>Create an account</p>
      </div>

      <div className="inputs">
        <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" placeholder='Email' />
        </div>
        <div className='input'>
          <FontAwesomeIcon icon={faLock} />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <div className="validation">
        <ValidateButton />
      </div>

      <div className="social-container">
        <div className="social-link">
          <p>or continue with these social profile</p>
          <div className="social-logos">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogContainer
