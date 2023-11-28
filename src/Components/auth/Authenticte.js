import React, { useEffect } from 'react'
import './auth.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useLoadingContext } from 'react-router-loading'

export default function Authenticte() {

    const loadingContext = useLoadingContext();
    const location = useLocation()

    useEffect(() => {
        loadingContext.done();
    }, [])

    return (
        <div className="Authenticte-container">
            <div className="Authenticte-section">
                <div className="auth-pages">
                    <NavLink to="/auth/register" className="auth-btns sign-up">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Iconly/Light/Add-User" strokeWidth="1.8" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                <g id="Add-User" transform="translate(2.000000, 2.000000)" strokeWidth="1.8" >
                                    <path d="M7.8766,13.2062 C4.0326,13.2062 0.7496,13.7872 0.7496,16.1152 C0.7496,18.4432 4.0126,19.0452 7.8766,19.0452 C11.7216,19.0452 15.0036,18.4632 15.0036,16.1362 C15.0036,13.8092 11.7416,13.2062 7.8766,13.2062 Z" id="Stroke-1"></path>
                                    <path d="M7.8766,9.8859 C10.3996,9.8859 12.4446,7.8409 12.4446,5.3179 C12.4446,2.7949 10.3996,0.7499 7.8766,0.7499 C5.3546,0.7499 3.30957019,2.7949 3.30957019,5.3179 C3.3006,7.8319 5.3306,9.8769 7.8456,9.8859 L7.8766,9.8859 Z" id="Stroke-3"></path>
                                    <line x1="17.2037" y1="6.6691" x2="17.2037" y2="10.6791" id="Stroke-5"></line>
                                    <line x1="19.2496" y1="8.674" x2="15.1596" y2="8.674" id="Stroke-7"></line>
                                </g>
                            </g>
                        </svg>
                        <span>عضویت</span>
                    </NavLink>
                    <NavLink to="/auth/log-in" className={() => 'auth-btns log-in' + ((location.pathname == '/auth' || location.pathname.includes("/auth/log-in")) ? ' active' : '')}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.791 12.1207H2.75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.8643 9.20471L14.7923 12.1207L11.8643 15.0367" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.25879 7.62988C7.58879 4.04988 8.92879 2.74988 14.2588 2.74988C21.3598 2.74988 21.3598 5.05988 21.3598 11.9999C21.3598 18.9399 21.3598 21.2499 14.2588 21.2499C8.92879 21.2499 7.58879 19.9499 7.25879 16.3699" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>ورود</span>
                    </NavLink>
                </div>

                <Outlet />

            </div>
        </div>
    )
}
