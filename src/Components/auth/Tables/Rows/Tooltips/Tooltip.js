import React from 'react'
import './Tooltip.css'

export default function Tooltip(props) {
  return (
    <div className={`Tooltip${props.customClass ? ' ' + props.customClass : ''}`}>{props.title}</div>
  )
}
