import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/validateButton.scss'

function ValidateButton() {
  return (
    <div className='validate-button'>
      <Link to='/' > Create </Link>
    </div>
  )
}

export default ValidateButton
