import React, { useContext, useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import { Link, useNavigate, useParams } from 'react-router-dom'
import AppContext from './../../../Contexts/AppContext'
import Alert from './../../../Tools/Js/Alert'

export default function ExamResultPage() {

    const appContext = useContext(AppContext)
    const navigate = useNavigate()
    const loadingContext = useLoadingContext();
    const param = useParams()


    let [data, setData] = useState({
        total: 0,
        corrects: 0,
        percent: 0,
        theme: 'green'
    })

    useEffect(() => {

        if (param.type == 'test-again' || param.type == 'test') {
            appContext.HttpRequest.post(`checkResultPage/${param.quiz_id}`)
                .then(res => {
                    if (param.type == 'test-again') {

                        appContext.HttpRequest.post(`test-again-result/${param.quiz_id}`)
                            .then(res => {
                                setData(res.data)
                                loadingContext.done()
                            })
                            .catch(err => {
                                if (err.response.data == 'main page') {
                                    navigate('/')
                                }
                                else {
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

                                    loadingContext.done()
                                }

                            })
                    }
                    else if (param.type == 'test') {

                        appContext.HttpRequest.post(`test-result/${param.quiz_id}`)
                            .then(res => {
                                setData(res.data)
                                loadingContext.done()
                            })
                            .catch(err => {
                                if (err.response.data == 'main page') {
                                    navigate('/')
                                }
                                else {
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

                                    loadingContext.done()
                                }

                            })
                    }
                })
                .catch(err => {
                    navigate('/')
                });
        }
        else {
            navigate('/')
        }

    }, [])

    return (
        <div className="StartBoxPage">
            <div className={`IconBox ${data.theme}`}>
                <svg viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.5978 8.60487C55.5504 6.65225 55.5504 3.48642 53.5978 1.5338C51.6451 -0.418819 48.4793 -0.418819 46.5267 1.5338L20.4493 27.6112L9.18202 16.3439C7.2294 14.3913 4.06357 14.3913 2.11095 16.3439C0.158329 18.2965 0.158329 21.4624 2.11095 23.415L16.9164 38.2204C18.869 40.173 22.0348 40.173 23.9874 38.2204C24.0332 38.1746 24.0779 38.1282 24.1215 38.0811L53.5978 8.60487Z"></path>
                </svg>
            </div>
            <p className={`result-text ${data.theme}`}>شما به <span>{data.corrects} سوال</span> از {data.total} سوال جواب صحیح داده اید</p>
            <div className={`advice-box ${data.theme}`}>
                <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.0152 13.8853C25.077 13.6251 25.1079 13.495 25.1294 13.304C25.1508 13.1129 25.1494 12.9555 25.1464 12.6405C25.0547 2.78649 22.718 0.649414 12.5789 0.649414C2.43987 0.649414 0.103147 2.78649 0.0114294 12.6405C0.00849858 12.9554 0.00703266 13.113 0.0285043 13.304C0.0499726 13.495 0.0808653 13.6251 0.142642 13.8852C2.00709 21.7358 8.62674 24.6636 11.3722 25.5567C11.8458 25.7107 12.0826 25.7878 12.5789 25.7878C13.0753 25.7878 13.3121 25.7107 13.7857 25.5567C16.5311 24.6636 23.1508 21.7358 25.0152 13.8853ZM23.0515 12.6602C23.0052 7.68852 22.3429 5.57009 21.1922 4.47927C20.0051 3.35396 17.7193 2.75296 12.5789 2.75296C7.43861 2.75296 5.15279 3.35396 3.96567 4.47926C2.81494 5.57008 2.15267 7.68852 2.1064 12.6602C2.1032 13.0044 2.10587 13.0282 2.11033 13.0679C2.11352 13.0963 2.11639 13.1147 2.12295 13.1468C2.1329 13.1956 2.14722 13.2569 2.18058 13.3974C3.78401 20.1488 9.48383 22.7312 12.0179 23.5555C12.1424 23.596 12.2209 23.6214 12.289 23.6418C12.3519 23.6606 12.3843 23.6685 12.4026 23.6724L12.4045 23.6728C12.4202 23.6762 12.4571 23.6842 12.5789 23.6842C12.7007 23.6842 12.7377 23.6762 12.7534 23.6728L12.7552 23.6724C12.7735 23.6685 12.806 23.6606 12.8689 23.6418C12.937 23.6214 13.0155 23.596 13.14 23.5555C15.674 22.7312 21.3739 20.1488 22.9773 13.3974C23.0107 13.2569 23.025 13.1956 23.0349 13.1468C23.0415 13.1147 23.0443 13.0966 23.0475 13.0681C23.052 13.0285 23.0547 13.0044 23.0515 12.6602Z" fillOpacity="0.3"></path>
                    <path d="M17.5077 10.8592C17.9168 10.4485 17.9168 9.78252 17.5077 9.37178C17.0986 8.96104 16.4353 8.96104 16.0262 9.37178L11.5293 13.8869L10.175 12.5271C9.76588 12.1164 9.10262 12.1164 8.69353 12.5271C8.28445 12.9378 8.28445 13.6038 8.69353 14.0145L10.7886 16.1181C11.1977 16.5288 11.8609 16.5288 12.27 16.1181L17.5077 10.8592Z"></path>
                </svg>

                {
                    data.percent <= 40
                        ?
                        <p><span>{data.percent} درصد</span> سوال‌ها جواب دادی، از نظر ما شما میتونی خیلی بهتر از این حرفا باشی</p>
                        : data.percent > 40 && data.percent <= 65
                            ?
                            <p>مممم، بدنبود به <span>{data.percent} درصد</span>  سوال‌ها جواب دادی، اما می‌تونست بهتره باشه،</p>
                            :
                            <p>خوب، خوب، ترکوندی به  <span>{data.percent} درصد </span> سوال‌ها جواب دادی، عالی بود</p>
                }

            </div>
            <p className="advice-box2">
                {
                    data.percent <= 65
                        ?
                        `پیشنهاد میکنیم با دقت بیشتری جلسات رو ببینید و حتما تمرین کنید تا دفعه بعدی بترکونید`
                        :
                        `با خیال راحت می‌تونی صفحه رو ببندی و به ادامه کار مشغول بشی`
                }

            </p>
            <div className="btnBoxAll">
                <div className="btnBox">
                    <Link className="changePageBtn" to={param.type == 'test-again' ? `/quiz/${param.quiz_id}/result/test` : '/'}>
                        <span>{param.type == 'test-again' ? 'مشاهده نتایج اصلی' : 'بازگشت به خانه'}</span>
                        <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M14.2942 5.33371L18.3437 4.97559C19.2524 4.97559 19.9893 5.71958 19.9893 6.6372C19.9893 7.55483 19.2524 8.29882 18.3437 8.29882L14.2942 7.94069C13.5813 7.94069 13.0033 7.35708 13.0033 6.6372C13.0033 5.91612 13.5813 5.33371 14.2942 5.33371" ></path>
                            <path d="M0.696472 5.39928C0.759764 5.33538 0.996213 5.06527 1.21833 4.84099C2.51402 3.43621 5.89715 1.13913 7.66693 0.436134C7.93562 0.323993 8.61511 0.0852408 8.97934 0.0683594C9.32685 0.0683594 9.65883 0.149149 9.97529 0.308317C10.3706 0.531394 10.6858 0.883493 10.8602 1.29829C10.9712 1.58528 11.1456 2.44744 11.1456 2.46312C11.3187 3.40486 11.4131 4.93625 11.4131 6.62922C11.4131 8.24019 11.3187 9.70888 11.1766 10.6663C11.1611 10.6832 10.9868 11.7527 10.7969 12.1193C10.4494 12.7897 9.76989 13.2046 9.04263 13.2046H8.97934C8.50525 13.1889 7.5093 12.7729 7.5093 12.7584C5.83386 12.0554 2.53074 9.86926 1.20281 8.41624C1.20281 8.41624 0.827833 8.04244 0.665424 7.80972C0.412257 7.4745 0.285673 7.0597 0.285673 6.6449C0.285673 6.18186 0.427781 5.75138 0.696472 5.39928" ></path>
                        </svg>
                    </Link>
                    <div className="double-btn">
                        <Link className='btnExam border' to={`/quiz/${param.quiz_id}/questions/${param.type == 'test' ? 'review' : 'review-again'}`}>مرور پاسخ ها</Link>
                        <Link className='btnExam' to={`/quiz/${param.quiz_id}/questions/test-again`}>تست دوباره</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
