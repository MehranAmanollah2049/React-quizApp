import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';
import ExamContext from '../../../Contexts/ExamContext';
import Option from './Options/Option';
import AppContext from '../../../Contexts/AppContext';
import Alert from '../../../Tools/Js/Alert';

export default function ExamPage() {

    const appContext = useContext(AppContext)
    const loadingContext = useLoadingContext();
    let [state, setstate] = useState(null)
    const examContext = useContext(ExamContext)
    const param = useParams();
    const navigate = useNavigate()


    let [BtnLoading, setBtnLoading] = useState(false)
    let [MainLoading, setMainLoading] = useState(false)

    let [CurrentQ, setCurrentQ] = useState(0)
    let [QuestionData, setQuestionData] = useState(false);

    let [SelectedItem, setSelectedItem] = useState([])
    let [SelectedItemLoading, setSelectedItemLoading] = useState(false)


    useEffect(() => {

        if (param.type == 'test' || param.type == 'test-again' || param.type == 'review' || param.type == 'review-again') {
            appContext.HttpRequest.get(`getQuizUserId/${param.quiz_id}`)
                .then(res => {
                    setstate(res.data)
                })
                .catch(err => {
                    navigate('/')
                })

            if (state) {
                if (param.type == 'test') {

                    appContext.HttpRequest.post(`testpage/${param.quiz_id}`)
                        .then(res => {
                            loadingContext.done()
                        })
                        .catch(err => {
                            console.log(err)
                            if (err.response.data == 'not ok') {
                                navigate(`/quiz/${param.quiz_id}/result/test`) // result page
                            }
                            else if (err.response.data == 'main page') {
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
                            }

                        })

                }
                else if (param.type == 'test-again') {
                    appContext.HttpRequest.post(`testAgainpage/${param.quiz_id}`)
                        .then(res => {
                            loadingContext.done()
                        })
                        .catch(err => {
                            if (err.response.data == 'not ok') {
                                navigate(`/quiz/${param.quiz_id}/result/test`) // result page
                            }
                            else if (err.response.data == 'main page') {
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
                            }

                        })
                }
                else if (param.type == 'review' || param.type == 'review-again') {
                    appContext.HttpRequest.post(`reviewTestpageCheck/${param.quiz_id}`)
                        .then(res => {
                            loadingContext.done()
                        })
                        .catch(err => {
                            if (err.response.data == 'not ok') {
                                navigate(`/`)
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

                            }


                        })
                }
            }

        }
        else {
            navigate('/')
        }


    }, [state])

    useEffect(() => {

        requestQ(CurrentQ)

    }, [CurrentQ])

    function requestQ(CurrentQ) {

        if (CurrentQ == 0) {
            setBtnLoading(false)
            setMainLoading(true)
            setSelectedItem([])
        }

        if (param.type == 'test' || param.type == 'test-again') {
            appContext.HttpRequest.post(`getQuestion/${param.quiz_id}`, {
                current: CurrentQ,
                type: param.type,
                exam_id: state
            })
                .then(res => {
                    setQuestionData(res.data)
                    setBtnLoading(false)
                    setMainLoading(false)
                    setCurrentQ(CurrentQ)
                })
                .catch(err => {
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

                    setBtnLoading(false)
                    setMainLoading(false)
                })
        }
        else if (param.type == 'review' || param.type == 'review-again') {
            appContext.HttpRequest.post(`reviewTestpage/${param.quiz_id}`, {
                type: param.type,
                current: CurrentQ
            })
                .then(res => {
                    setQuestionData(res.data)
                    setBtnLoading(false)
                    setMainLoading(false)
                    setCurrentQ(CurrentQ)
                })
                .catch(err => {
                    
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
                })
        }


    }


    function selectOption(id, question_id) {

        setSelectedItemLoading(id)

        let data = {
            userquiz_id: state,
            question_id: question_id,
            answer_id: id,
            type: param.type
        }

        appContext.HttpRequest.post('test/selectOption', data)
            .then(res => {

                let answersId = []
                QuestionData.answers.forEach(item => {
                    answersId.push(item.id)
                })
                setSelectedItem([...SelectedItem].filter(item => !answersId.includes(item)))

                if (res.data == 'add') {
                    setSelectedItem(prev => ([
                        ...prev,
                        id
                    ]))
                }
                else {
                    setSelectedItem([...SelectedItem].filter(item => item != id))
                }

                setSelectedItemLoading(false)
            })
            .catch(err => {
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

                setSelectedItemLoading(false)
            })
    }

    function PrevQuestion() {
        if (CurrentQ != 1 || CurrentQ != 0) {
            setBtnLoading('prev')
            setCurrentQ(prev => prev - 1);
        }
    }

    function NextQuestion() {
        if (SelectedItem != []) {
            setBtnLoading('next')
            if (CurrentQ == 0) {
                requestQ(2)
            }
            else {
                requestQ(CurrentQ + 1)
            }
        }
    }

    function FinishTest() {

        setBtnLoading('endBtn')

        appContext.HttpRequest.post(`finishTest/${param.quiz_id}`)
            .then(res => {
                if (res.data == 'ok') {
                    Alert('success', 'با تشکر , نتایج آزمون شما با موفقیت ثبت شد')
                    navigate(`/quiz/${param.quiz_id}/result/test`)
                }
                setBtnLoading(false)
            })
            .catch(err => {
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

                setBtnLoading(false)
            })
    }

    return (
        <Fragment>
            <div className="topQuestionBox">
                <div className="rightTopQBox">
                    <div className="IconBox-sm orange">
                        <svg viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0C9.27889 0 5.7824 1.62766 3.38666 4.32286C1.06454 6.93525 0 10.2912 0 13.5C0 19.1431 3.30328 23.0405 5.45115 25.5747L5.56608 25.7103C8.10377 28.7066 9 29.9696 9 31.5C9 33.9853 11.0147 36 13.5 36C15.9853 36 18 33.9853 18 31.5C18 26.399 14.8317 22.697 12.8189 20.3451C12.6851 20.1887 12.5563 20.0382 12.4339 19.8937C10.0766 17.1104 9 15.5314 9 13.5C9 12.2088 9.43546 11.0648 10.1133 10.3021C10.7176 9.62234 11.7211 9 13.5 9C15.2789 9 16.2824 9.62234 16.8867 10.3021C17.5645 11.0648 18 12.2088 18 13.5C18 15.9853 20.0147 18 22.5 18C24.9853 18 27 15.9853 27 13.5C27 10.2912 25.9355 6.93525 23.6133 4.32286C21.2176 1.62766 17.7211 0 13.5 0Z" fill="#FFA826"></path>
                            <path d="M13.5 40.5C11.0147 40.5 9 42.5147 9 45C9 47.4853 11.0147 49.5 13.5 49.5C15.9853 49.5 18 47.4853 18 45C18 42.5147 15.9853 40.5 13.5 40.5Z" fill="#FFA826"></path>
                        </svg>
                    </div>
                    <span>{!examContext.QuizDataLoading && examContext.QuizData.title}</span>
                </div>
                <div className="leftTopQBox">
                    <div className="ExamDetailBox sm">
                        <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--info)" d="M8.60653 10.2712C9.04286 10.2712 9.39658 10.625 9.39658 11.0613C9.39658 11.4976 9.04286 11.8514 8.60653 11.8514H5.44631C5.00998 11.8514 4.65625 11.4976 4.65625 11.0613C4.65625 10.625 5.00998 10.2712 5.44631 10.2712H8.60653Z" ></path>
                            <path fill="var(--info)" d="M11.7667 13.4315C12.2031 13.4315 12.5568 13.7852 12.5568 14.2215C12.5568 14.6579 12.2031 15.0116 11.7667 15.0116H5.44631C5.00998 15.0116 4.65625 14.6579 4.65625 14.2215C4.65625 13.7852 5.00998 13.4315 5.44631 13.4315H11.7667Z" ></path>
                            <path fill="var(--info)" fillRule="evenodd" clipRule="evenodd" d="M19.0131 1.5068C18.4058 0.91424 17.4369 0.575534 16.4609 0.366592C15.4492 0.150018 14.2789 0.0431709 13.1318 0.0112697C11.9812 -0.0207246 10.8309 0.0220756 9.8509 0.113393C8.89222 0.202726 8.03108 0.344107 7.49484 0.534369C6.4026 0.921906 5.81982 1.5946 5.56032 2.35419C5.42964 2.7367 5.38973 3.13192 5.37976 3.45868C1.01604 4.01959 0.212642 5.9401 0.944058 11.1127C1.85807 17.5766 3.73266 18.9621 11.565 18.9621C16.9894 18.9621 19.3683 18.2975 20.0146 15.7416L20.0211 15.7433C20.1398 15.2685 20.2521 14.267 20.3327 13.0701C20.4151 11.8475 20.4686 10.3523 20.4541 8.85143C20.4396 7.35488 20.3572 5.83034 20.1617 4.55782C20.0641 3.9222 19.9351 3.32852 19.7632 2.82363C19.5969 2.33501 19.3644 1.84955 19.0131 1.5068ZM18.7887 6.64433C18.7446 5.98458 18.6812 5.35995 18.5949 4.79863C18.5052 4.21454 18.3938 3.71992 18.2627 3.33459C18.126 2.933 17.9929 2.72633 17.9062 2.64171C17.6375 2.37953 17.0498 2.11407 16.1291 1.91697C15.2441 1.72751 14.1775 1.62646 13.0877 1.59615C12.0012 1.56594 10.9147 1.60662 9.99794 1.69205C9.05991 1.77946 8.36457 1.90808 8.0248 2.02863C7.36503 2.26272 7.15532 2.58881 7.06033 2.86686C7.00967 3.01517 6.98499 3.1633 6.97348 3.31923C7.6899 3.28032 8.47867 3.26336 9.34515 3.26336C14.8815 3.26336 17.441 3.95558 18.7887 6.64433ZM18.3809 11.1127C17.9211 7.86129 17.2778 6.6146 16.4057 5.97006C15.9435 5.6285 15.2495 5.32817 14.11 5.12445C12.9664 4.91999 11.4956 4.83323 9.56713 4.83323C7.63868 4.83323 6.19246 4.91999 5.10663 5.12445C4.02475 5.32817 3.41564 5.6285 3.05006 5.97006C2.36023 6.6146 2.06947 7.86129 2.52923 11.1127C2.98898 14.3641 3.63231 15.6108 4.50442 16.2554C4.96659 16.5969 5.66064 16.8973 6.80013 17.101C7.94378 17.3054 9.41454 17.3922 11.343 17.3922C13.2715 17.3922 14.7177 17.3054 15.8035 17.101C16.8854 16.8973 17.4945 16.5969 17.8601 16.2554C18.5499 15.6108 18.8407 14.3641 18.3809 11.1127Z" fillOpacity="0.4"></path>
                        </svg>
                        <p>
                            سوال
                            <span>{CurrentQ == 0 ? 1 : CurrentQ} از {!examContext.QuizDataLoading && examContext.QuizData.questions}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="botomQuestionBox">
                {
                    MainLoading
                        ?
                        <div className="loadinPage">
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
                        <Fragment>
                            <p className="currentQ">سوال {CurrentQ == 0 ? 1 : CurrentQ}</p>
                            <p className="question-text">{QuestionData.title}</p>
                            <div className="optionsAllCon">
                                {
                                    (param.type == 'test' || param.type == 'test-again') && QuestionData
                                        ?
                                        QuestionData.answers.map(answer => {

                                            return <Option
                                                key={'option' + answer.id}
                                                checked={SelectedItem.includes(answer.id) ? true : false}
                                                theme="orange"
                                                type="ok"
                                                yourChocie={false}
                                                loading={SelectedItemLoading == answer.id ? true : false}
                                                onClickEvent={() => selectOption(answer.id, QuestionData.id)}
                                                text={answer.title}
                                            />
                                        })
                                        : (param.type == 'review' || param.type == 'review-again') && QuestionData
                                        ?
                                        QuestionData.answers.map(answer => {

                                            return <Option
                                                key={'option' + answer.id}
                                                checked={answer.isCorrect || answer.isUserSelected}
                                                theme={answer.isCorrect  ? 'green' : !answer.isCorrect && answer.isUserSelected ? 'red' : !answer.isCorrect && !answer.isUserSelected ? 'orange' : 'orange'}
                                                type={answer.isCorrect  ? 'ok' : !answer.isCorrect && answer.isUserSelected ? 'no' : 'no'}
                                                yourChocie={answer.isUserSelected}
                                                loading={SelectedItemLoading == answer.id ? true : false}
                                                text={answer.title}
                                            />
                                        })
                                        : null
                                }

                            </div>
                        </Fragment>
                }

                <div className="btnSlidesAll">
                    <div className={`btnSlides prev${BtnLoading == 'prev' ? ' loading' : ''}${CurrentQ == 1 || CurrentQ == 0 ? ' disable' : ''}`} onClick={PrevQuestion}>
                        {
                            BtnLoading == 'prev'
                                ?
                                <svg className='loadingSvgBtn' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                    <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                    </circle>
                                    <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                        <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                    </circle>
                                </svg>
                                :
                                <Fragment>
                                    <svg className='btnSvg' viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M5.27333 4.58117L1.99452 4.2912C1.2587 4.2912 0.662109 4.8936 0.662109 5.63659C0.662109 6.37958 1.2587 6.98198 1.99452 6.98198L5.27333 6.69201C5.85057 6.69201 6.31856 6.21946 6.31856 5.63659C6.31856 5.05274 5.85057 4.58117 5.27333 4.58117"></path>
                                        <path d="M16.2826 4.63448C16.2313 4.58273 16.0399 4.36403 15.86 4.18243C14.8109 3.045 12.0716 1.18509 10.6387 0.615882C10.4211 0.525083 9.87095 0.331769 9.57604 0.3181C9.29467 0.3181 9.02587 0.383514 8.76963 0.512391C8.44959 0.693012 8.19432 0.978102 8.05315 1.31396C7.96323 1.54633 7.82206 2.24441 7.82206 2.2571C7.68186 3.01962 7.60547 4.25956 7.60547 5.63034C7.60547 6.93472 7.68186 8.1239 7.79692 8.89911C7.80949 8.91277 7.95066 9.77878 8.1044 10.0756C8.38577 10.6184 8.93594 10.9543 9.52479 10.9543H9.57604C9.95991 10.9416 10.7663 10.6048 10.7663 10.593C12.1229 10.0238 14.7974 8.25375 15.8726 7.07726C15.8726 7.07726 16.1762 6.7746 16.3077 6.58617C16.5127 6.31475 16.6152 5.97889 16.6152 5.64303C16.6152 5.26812 16.5001 4.91957 16.2826 4.63448"></path>
                                    </svg>
                                    <span>سوال قبل</span>
                                </Fragment>
                        }

                    </div>
                    {
                        CurrentQ == examContext.QuizData.questions && param.type == 'test'
                            ?
                            <div className={`btnSlides next${BtnLoading == 'endBtn' ? ' loading' : ''}${SelectedItem.length < (CurrentQ == 0 ? 1 : CurrentQ) ? ' disable' : ''}`} onClick={FinishTest}>
                                {
                                    BtnLoading == 'endBtn'
                                        ?
                                        <svg className='loadingSvgBtn' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                            <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                            </circle>
                                            <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                            </circle>
                                        </svg>
                                        :
                                        <span>پایان آزمون و بررسی نتایج</span>
                                }

                            </div>
                            : CurrentQ == examContext.QuizData.questions && param.type == 'test-again'
                                ?
                                <Link to={`/quiz/${param.quiz_id}/result/test-again`} className={`btnSlides next${BtnLoading == 'endBtn' ? ' loading' : ''}${SelectedItem.length < (CurrentQ == 0 ? 1 : CurrentQ) ? ' disable' : ''}`}>
                                    {
                                        BtnLoading == 'endBtn'
                                            ?
                                            <svg className='loadingSvgBtn' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                                <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                                </circle>
                                                <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                    <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                    <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                                </circle>
                                            </svg>
                                            :
                                            <span>پایان آزمون و بررسی نتایج</span>
                                    }

                                </Link>
                                : CurrentQ == examContext.QuizData.questions && (param.type == 'review' || param.type == 'review-again')
                                ?
                                <Link to={`/quiz/${param.quiz_id}/result/${param.type == 'review' ? 'test' : 'test-again'}`} className={`btnSlides next${BtnLoading == 'endBtn' ? ' loading' : ''}${(SelectedItem.length < (CurrentQ == 0 ? 1 : CurrentQ)) && (param.type != 'review' && param.type != 'review-again') ? ' disable' : ''}`}>
                                    {
                                        BtnLoading == 'endBtn'
                                            ?
                                            <svg className='loadingSvgBtn' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                                <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                                </circle>
                                                <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                    <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                    <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                                </circle>
                                            </svg>
                                            :
                                            <span>پایان بررسی آزمون</span>
                                    }

                                </Link>
                                :
                                <div className={`btnSlides next${BtnLoading == 'next' ? ' loading' : ''}${(QuestionData && 
                                    !QuestionData.answers.some(item => {
                                        return SelectedItem.includes(item.id)
                                    })
                                ) && (param.type != 'review' && param.type != 'review-again') ? ' disable' : ''}`} onClick={NextQuestion}>
                                    {
                                        BtnLoading == 'next'
                                            ?
                                            <svg className='loadingSvgBtn' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

                                                <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

                                                </circle>
                                                <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                                                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                                    <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                                    <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                                                </circle>
                                            </svg>
                                            :
                                            <Fragment>
                                                <span>سوال بعدی</span>
                                                <svg className='btnSvg' viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M12.0001 4.58117L15.2789 4.2912C16.0147 4.2912 16.6113 4.8936 16.6113 5.63659C16.6113 6.37958 16.0147 6.98198 15.2789 6.98198L12.0001 6.69201C11.4229 6.69201 10.9549 6.21946 10.9549 5.63659C10.9549 5.05274 11.4229 4.58117 12.0001 4.58117"></path>
                                                    <path d="M0.990877 4.63448C1.04212 4.58273 1.23357 4.36403 1.41342 4.18243C2.46252 3.045 5.20179 1.18509 6.63476 0.615882C6.85231 0.525083 7.40249 0.331769 7.6974 0.3181C7.97877 0.3181 8.24757 0.383514 8.5038 0.512391C8.82385 0.693012 9.07912 0.978102 9.22029 1.31396C9.31021 1.54633 9.45138 2.24441 9.45138 2.2571C9.59158 3.01962 9.66797 4.25956 9.66797 5.63034C9.66797 6.93472 9.59158 8.1239 9.47652 8.89911C9.46395 8.91277 9.32278 9.77878 9.16904 10.0756C8.88767 10.6184 8.33749 10.9543 7.74864 10.9543H7.6974C7.31353 10.9416 6.50712 10.6048 6.50712 10.593C5.15054 10.0238 2.47606 8.25375 1.40085 7.07726C1.40085 7.07726 1.09724 6.7746 0.965737 6.58617C0.760751 6.31475 0.658258 5.97889 0.658258 5.64303C0.658258 5.26812 0.773321 4.91957 0.990877 4.63448"></path>
                                                </svg>
                                            </Fragment>
                                    }

                                </div>
                    }

                </div>
            </div>
        </Fragment>
    )
}
