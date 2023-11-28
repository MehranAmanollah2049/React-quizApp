import React, { Fragment, useContext, useEffect, useState } from 'react'
import './MainPage.css'
import Card from '../MainComponents/Card/Card'
import { Link } from 'react-router-dom'
import { useLoadingContext } from "react-router-loading";
import AppContext from '../../../Contexts/AppContext';
import Alert from './../../../Tools/Js/Alert'

export default function MainPage() {

    const appContext = useContext(AppContext)
    const loadingContext = useLoadingContext();

    let [Quizs, setQuizs] = useState([])
    let [QuizsLoading, setQuizsLoading] = useState(false)

    useEffect(() => {
        loadingContext.done();

        setQuizsLoading(true)
        appContext.HttpRequest.get('QuizsData')
            .then(res => {
                setQuizs(res.data)

                setQuizsLoading(false)
            })
            .catch(err => {
                console.log(err)
                if (err.message == 'Request failed with status code 305') {
                    Alert('error', 'خطایی در احراز هویت اطلاعات شما بوجود اومد')
                    appContext.logOut()
                }
                else if (err.message != 'Request failed with status code 305' && err.message != 'Request failed with status code 302') {
                    Alert('error', 'با عرض پوزش , خطایی در سیتم بوجود آومد')
                }
                else {
                    Alert('error', err.response.data)
                }

                setQuizsLoading(false)
            })

    }, [])

    return (

        <div className="ContainerMain">
            <div className="containerSec">
                <div className="MenuTop">
                    <div className="rightMenuTop">
                        <svg viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="24" r="10"></circle>
                            <circle cx="30" cy="13" r="7" fillOpacity="0.4"></circle>
                            <circle cx="15" cy="4" r="4" fillOpacity="0.7"></circle>
                        </svg>
                        <p className='titlePage'> پلتفرم <span>آزمون</span> آنلاین</p>
                    </div>
                    <div className="lefttMenuTop">
                        {
                            appContext.authLoading
                                ?
                                <div className="loadingUser">
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
                                :
                                appContext.auth && !appContext.authLoading
                                    ?
                                    <Fragment>
                                        <Link to="/panel" className='Menu_btns panel'>
                                            <svg style={{ transform: 'translateY(-1px)' }} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Iconly/Light/Activity" stroke="#fff" strokeWidth="1.8" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                    <g id="Activity" transform="translate(2.000000, 1.500000)" stroke="#fff" strokeWidth="1.8" >
                                                        <polyline id="Path_33966" points="5.24485128 13.2814646 8.23798631 9.39130439 11.652174 12.0732266 14.5812358 8.29290622"></polyline>
                                                        <circle id="Ellipse_741" cx="17.9954234" cy="2.70022885" r="1.92219681"></circle>
                                                        <path d="M12.9244852,1.62013731 L5.6567506,1.62013731 C2.64530894,1.62013731 0.778032041,3.75286043 0.778032041,6.76430209 L0.778032041,14.846682 C0.778032041,17.8581237 2.60869567,19.9816935 5.6567506,19.9816935 L14.2608696,19.9816935 C17.2723113,19.9816935 19.1395882,17.8581237 19.1395882,14.846682 L19.1395882,7.80778036" id="Path"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span>پنل کاربری من</span>
                                        </Link>
                                    </Fragment>
                                    :
                                    <Link to="/auth/log-in" className='Menu_btns ripple-btn'>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g id="Iconly/Light/Add-User" stroke="#fff" strokeWidth="1.8" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                <g id="Add-User" transform="translate(2.000000, 2.000000)" stroke="#fff" strokeWidth="1.8" >
                                                    <path d="M7.8766,13.2062 C4.0326,13.2062 0.7496,13.7872 0.7496,16.1152 C0.7496,18.4432 4.0126,19.0452 7.8766,19.0452 C11.7216,19.0452 15.0036,18.4632 15.0036,16.1362 C15.0036,13.8092 11.7416,13.2062 7.8766,13.2062 Z" id="Stroke-1"></path>
                                                    <path d="M7.8766,9.8859 C10.3996,9.8859 12.4446,7.8409 12.4446,5.3179 C12.4446,2.7949 10.3996,0.7499 7.8766,0.7499 C5.3546,0.7499 3.30957019,2.7949 3.30957019,5.3179 C3.3006,7.8319 5.3306,9.8769 7.8456,9.8859 L7.8766,9.8859 Z" id="Stroke-3"></path>
                                                    <line x1="17.2037" y1="6.6691" x2="17.2037" y2="10.6791" id="Stroke-5"></line>
                                                    <line x1="19.2496" y1="8.674" x2="15.1596" y2="8.674" id="Stroke-7"></line>
                                                </g>
                                            </g>
                                        </svg>
                                        <span>ورود و عضویت</span>
                                    </Link>
                        }


                    </div>
                </div>
                <div className="Quizs_con">
                    {
                        QuizsLoading
                            ?
                            <div className="loadingCards">
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
                            : Quizs.length != 0 ?
                            Quizs.map(Quiz => (
                                <Card key={Quiz.id} {...Quiz} />
                            ))
                            :
                            <div className="EmptyPage">موردی یافت نشد</div>

                    }
                    
    
                </div>
            </div>
        </div>
    )
}
