import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './DrpBtn.css'

export default function DrpBtn(props) {
  return (
    <Fragment>
        {
            props.link 
            ? <Link to={props.link} className={`DrpBtn${props.theme ? ' ' + props.theme : ''}`}>{props.title}</Link>
            : <div className={`DrpBtn${props.theme ? ' ' + props.theme : ''}`} onClick={props.onClickEvent}>{props.title}</div>

        }
    </Fragment>
    
  )
}
