import React from 'react'
import './Toggle.css'

export default function Toggle(props) {
  return (
    <div className={`Toggle-btn${props.isActive ? ' active' : ''}${props.isLoading ? ' loading' : ''}`} onClick={props.onClickEvent}></div>
  )
}
