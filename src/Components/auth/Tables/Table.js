import React, { Fragment } from 'react'
import './Table.css'

export default function Table(props) {
    return (
        <div className="TableContent">
            <p className="titleTable">{props.title}</p>
            <div className="TableAll">

                <div className="thCon">
                    {
                        props.thData.map(th => (
                            <div className="thBox" key={th.id} style={{ width: `calc(100% / ${th.cloNum})`, justifyContent: th.position }}>{th.title}</div>
                        ))
                    }
                </div>
                <div className="rowContent">
                    {
                        props.isLoading && <div className="loadingTable">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                <circle cx="50" cy="50" r="20" fill="none" stroke="var(--title)" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                </circle>
                                <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="var(--title)" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                    <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                    <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                </circle>
                            </svg>
                        </div>
                    }
                    {
                        (props.isLoading == false && props.children.length == 0) ? <div className="emptyTable">موردی یافت نشد :(</div> : props.isLoading == false ? props.children : null
                    }
        

                </div>

            </div>
        </div>
    )
}
