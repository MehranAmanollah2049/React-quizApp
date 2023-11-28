import React, { Fragment } from 'react'
import './option.css'

export default function Option(props) {
    return (
        <Fragment>
            {
                props.onClickEvent
                    ?
                    <div className="Option" onClick={props.onClickEvent}>
                        <div className={`checkBoxCon ${props.theme}${props.checked ? ' checked' : ''}`} >
                            {
                                props.type == 'ok' && !props.loading
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 507.506 507.506" xmlSpace="preserve"><g><path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" opacity="1" dataoriginal="#000000"></path></g></svg>
                                    : !props.loading ?
                                        <svg className='x' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512.021 512.021" xmlSpace="preserve"><g><path d="M301.258 256.01 502.645 54.645c12.501-12.501 12.501-32.769 0-45.269-12.501-12.501-32.769-12.501-45.269 0L256.01 210.762 54.645 9.376c-12.501-12.501-32.769-12.501-45.269 0s-12.501 32.769 0 45.269L210.762 256.01 9.376 457.376c-12.501 12.501-12.501 32.769 0 45.269s32.769 12.501 45.269 0L256.01 301.258l201.365 201.387c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269L301.258 256.01z" opacity="1" dataoriginal="#000000"></path></g></svg>
                                        :
                                        <svg className='loadingSvg' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                            <circle cx="50" cy="50" r="20" fill="none"  opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                            </circle>
                                            <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none"  strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                            </circle>
                                        </svg>
                            }
                        </div>
                        <p className="option-text">{props.text}</p>
                        {
                            props.yourChocie && <p className={`yourChoice ${props.theme}`}>انتخاب شما</p>
                        }
                    </div>
                    :
                    <div className="Option">
                        <div className={`checkBoxCon ${props.theme}${props.checked && !props.loading ? ' checked' : ''}`}>
                            {
                                props.type == 'ok' && !props.loading
                                    ?
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 507.506 507.506" xmlSpace="preserve"><g><path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" opacity="1" dataoriginal="#000000"></path></g></svg>
                                    : !props.loading ?
                                        <svg className='x' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512.021 512.021" xmlSpace="preserve"><g><path d="M301.258 256.01 502.645 54.645c12.501-12.501 12.501-32.769 0-45.269-12.501-12.501-32.769-12.501-45.269 0L256.01 210.762 54.645 9.376c-12.501-12.501-32.769-12.501-45.269 0s-12.501 32.769 0 45.269L210.762 256.01 9.376 457.376c-12.501 12.501-12.501 32.769 0 45.269s32.769 12.501 45.269 0L256.01 301.258l201.365 201.387c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269L301.258 256.01z" opacity="1" dataoriginal="#000000"></path></g></svg>
                                        :
                                        <svg className='loadingSvg' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                            <circle cx="50" cy="50" r="20" fill="none" stroke="var(--title3)" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                            </circle>
                                            <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="var(--title3)" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                            </circle>
                                        </svg>
                            }
                        </div>
                        <p className="option-text">{props.text}</p>
                        {
                            props.yourChocie && <p className={`yourChoice ${props.theme}`}>انتخاب شما</p>
                        }
                    </div>
            }
        </Fragment>
    )
}
