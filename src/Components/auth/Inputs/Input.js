import React, { Fragment, useState } from 'react'
import './Input.css'

export default function Input(props) {

    let [intType , setIntType] = useState('password')

    function SetIntTypeFun() {
        setIntType(prev => prev == 'password' ? 'text' : 'password')
    }

    function handleInputEvent(e) {
        if(props.number) {
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }
    }

    function NumberIntHandler(e) {
        if(props.phoneMode) {
            if(e.target.value.length >= 11) {
                e.preventDefault()
            }
        }
    }

    return (
        <div className={`Int-box${props.classNameText ? ' ' + props.classNameText : '' }`}>
            <label className='int-label'>{props.label}</label>
            <div className="int-section">
                <input type={props.type ? props.type != 'password' ? props.type : intType : 'text'} className={props.type == 'password' ? 'padding-left' : ''} placeholder={props.placeHolder ? props.placeHolder : `لطفا ${props.label} خود را وارد کنید ...`} value={props.value} onChange={props.onChageEvent} onInput={handleInputEvent} onKeyPress={NumberIntHandler} />
                {
                    props.type == 'password' &&
                    <div className="iconEye" onClick={SetIntTypeFun}>
                        {
                            intType != 'password' && <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1642 12.0521C15.1642 13.7981 13.7482 15.2141 12.0022 15.2141C10.2562 15.2141 8.84021 13.7981 8.84021 12.0521C8.84021 10.3051 10.2562 8.89014 12.0022 8.89014C13.7482 8.89014 15.1642 10.3051 15.1642 12.0521Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.75024 12.0521C2.75024 15.3321 6.89224 19.3541 12.0022 19.3541C17.1112 19.3541 21.2542 15.3351 21.2542 12.0521C21.2542 8.76912 17.1112 4.75012 12.0022 4.75012C6.89224 4.75012 2.75024 8.77212 2.75024 12.0521Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }

                        {
                            intType == 'password' && <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.42 17.7297C4.19 16.2697 2.75 14.0697 2.75 12.1397C2.75 8.85972 6.89 4.83972 12 4.83972C14.09 4.83972 16.03 5.50972 17.59 6.54972"  strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.8498 8.61023C20.7408 9.74023 21.2598 10.9902 21.2598 12.1402C21.2598 15.4202 17.1098 19.4402 11.9998 19.4402C11.0898 19.4402 10.2008 19.3102 9.36975 19.0802"  strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.76572 14.3669C9.17072 13.7779 8.83772 12.9749 8.84072 12.1379C8.83672 10.3929 10.2487 8.97493 11.9947 8.97193C12.8347 8.96993 13.6407 9.30293 14.2347 9.89693"  strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.1095 12.6991C14.8755 13.9911 13.8645 15.0041 12.5725 15.2411"  strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.8917 4.24988L4.11768 20.0239"  strokeWidth="1.5"  strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                        
                    </div>
                }
            </div>
        </div>
    )
}
