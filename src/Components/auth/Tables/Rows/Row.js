import React, { Fragment, useEffect, useRef, useState } from 'react'
import './Row.css'

export default function Row(props) {

    let [Height, setHeight] = useState(0)
    let [Width, setWidth] = useState(0)
    let [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if(ref.current) {
            setHeight(ref.current.clientHeight)
            setWidth(ref.current.clientWidth)
        }
       
    })

    function toggleDrp() {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="RowTable">
            {props.children}
            <div className="RowBox" style={{ width: `calc(100% / ${props.operationCol})` }}>
                {
                    props.loading
                        ?
                        <svg className='loading-row' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                            <circle cx="50" cy="50" r="20" fill="none" stroke="var(--title)" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                            </circle>
                            <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="var(--title)" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                            </circle>
                        </svg>
                        :
                        <Fragment>
                            <div className={`operiationBtn${isOpen ? ' active' : ''}`} onClick={toggleDrp}>
                                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.30396 6.30405C4.08098 7.52702 3.5 9.57319 3.5 13.0001C3.5 16.427 4.08098 18.4732 5.30396 19.6961C6.52693 20.9191 8.5731 21.5001 12 21.5001C15.4269 21.5001 17.4731 20.9191 18.696 19.6961C19.919 18.4732 20.5 16.427 20.5 13.0001C20.5 9.57319 19.919 7.52702 18.696 6.30405C17.4731 5.08107 15.4269 4.50009 12 4.50009C8.5731 4.50009 6.52693 5.08107 5.30396 6.30405ZM4.24329 5.24339C5.91107 3.57561 8.4899 3.00009 12 3.00009C15.5101 3.00009 18.0889 3.57561 19.7567 5.24339C21.4245 6.91116 22 9.48999 22 13.0001C22 16.5102 21.4245 19.089 19.7567 20.7568C18.0889 22.4246 15.5101 23.0001 12 23.0001C8.4899 23.0001 5.91107 22.4246 4.24329 20.7568C2.57552 19.089 2 16.5102 2 13.0001C2 9.48999 2.57552 6.91116 4.24329 5.24339Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9934 13C14.9934 12.4477 15.4411 12 15.9934 12H16.0024C16.5547 12 17.0024 12.4477 17.0024 13C17.0024 13.5523 16.5547 14 16.0024 14H15.9934C15.4411 14 14.9934 13.5523 14.9934 13Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9944 13C10.9944 12.4477 11.4421 12 11.9944 12H12.0034C12.5557 12 13.0034 12.4477 13.0034 13C13.0034 13.5523 12.5557 14 12.0034 14H11.9944C11.4421 14 10.9944 13.5523 10.9944 13Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.99561 13C6.99561 12.4477 7.44332 12 7.99561 12H8.00461C8.55689 12 9.00461 12.4477 9.00461 13C9.00461 13.5523 8.55689 14 8.00461 14H7.99561C7.44332 14 6.99561 13.5523 6.99561 13Z" />
                                </svg>
                                <div className={`drpRow${!isOpen ? ' close' : ''}`} style={{ height: Height, width: Width }}>
                                    <div className="drpContentRow" ref={ref}>
                                        {
                                            props.btns.map(item => (item))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={`overlayDrpRow${isOpen ? ' active' : ''}`} onClick={toggleDrp}></div>
                        </Fragment>
                }

            </div>
        </div>
    )
}
