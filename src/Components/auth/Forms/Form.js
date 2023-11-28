import React from 'react'
import "./Form.css"

export default function Form(props) {
  return (
    <form className="FormContent" onSubmit={props.onSubmitForm}>
      <p className="titleForm">{props.title}</p>
      <div className="intsForm">
        {props.children}
      </div>
      <div className="buttonOptions">
        <button type='submit' className={`${props.loading ? 'loading' : ''}`}>
          {
            props.loading
              ?
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                </circle>
                <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                  <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                  <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                </circle>
              </svg>
              : props.btnText ? props.btnText : 'ثبت اطلاعات'
          }
        </button>
      </div>
    </form>
  )
}
