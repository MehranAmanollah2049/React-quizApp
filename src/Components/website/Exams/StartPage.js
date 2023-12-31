import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import Ripple from './../../../Tools/Js/Ripple'
import AppContext from './../../../Contexts/AppContext'
import ExamContext from '../../../Contexts/ExamContext';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from './../../../Tools/Js/Alert'

export default function StartPage() {

  const loadingContext = useLoadingContext();
  const appContext = useContext(AppContext)
  const examContext = useContext(ExamContext)
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    appContext.HttpRequest.post(`checkStartPage/${param.quiz_id}`)
      .then(res => {
        loadingContext.done()
      })
      .catch(err => {
        navigate(`/quiz/${param.quiz_id}/result/test`)
      })
  }, [])

  let [isLoading, setLoading] = useState(false)

  function StartExam() {

    setLoading(true)

    appContext.HttpRequest.post(`startExam/${param.quiz_id}`)
      .then(res => {
        navigate(`/quiz/${param.quiz_id}/questions/test`)
      })
      .catch(err => {
       
        if (err.message == 'Request failed with status code 310') {
          navigate(`/quiz/${param.quiz_id}/result/test`)
        }
        else if (err.message == 'Request failed with status code 305') {
          Alert('error', 'خطایی در احراز هویت اطلاعات شما بوجود اومد')
          appContext.logOut()
        }
        else if (err.message != 'Request failed with status code 305' && err.message != 'Request failed with status code 302' && err.message != 'Request failed with status code 310') {
          Alert('error', 'با عرض پوزش , خطایی در سیتم بوجود آومد')
           setLoading(false)
        }

        else {
          Alert('error', err.response.data)
           setLoading(false)
        }
       
      })

  }

  return (
    <div className="StartBoxPage">
      {
        examContext.QuizDataLoading
          ?
          <div className="loadinPage">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

              <circle cx="50" cy="50" r="20" fill="none" stroke="var(--warning)" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

              </circle>
              <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="var(--warning)" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
              </circle>
            </svg>
          </div>
          :
          <Fragment>
            <div className="IconBox orange">
              <svg viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0C9.27889 0 5.7824 1.62766 3.38666 4.32286C1.06454 6.93525 0 10.2912 0 13.5C0 19.1431 3.30328 23.0405 5.45115 25.5747L5.56608 25.7103C8.10377 28.7066 9 29.9696 9 31.5C9 33.9853 11.0147 36 13.5 36C15.9853 36 18 33.9853 18 31.5C18 26.399 14.8317 22.697 12.8189 20.3451C12.6851 20.1887 12.5563 20.0382 12.4339 19.8937C10.0766 17.1104 9 15.5314 9 13.5C9 12.2088 9.43546 11.0648 10.1133 10.3021C10.7176 9.62234 11.7211 9 13.5 9C15.2789 9 16.2824 9.62234 16.8867 10.3021C17.5645 11.0648 18 12.2088 18 13.5C18 15.9853 20.0147 18 22.5 18C24.9853 18 27 15.9853 27 13.5C27 10.2912 25.9355 6.93525 23.6133 4.32286C21.2176 1.62766 17.7211 0 13.5 0Z" fill="#FFA826"></path>
                <path d="M13.5 40.5C11.0147 40.5 9 42.5147 9 45C9 47.4853 11.0147 49.5 13.5 49.5C15.9853 49.5 18 47.4853 18 45C18 42.5147 15.9853 40.5 13.5 40.5Z" fill="#FFA826"></path>
              </svg>
            </div>
            <p className="examName">{!examContext.QuizDataLoading && examContext.QuizData.title}</p>
            <div className="Exam-detailsCon">
              <div className="ExamDetailBox">
                <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="var(--info)" d="M8.60653 10.2712C9.04286 10.2712 9.39658 10.625 9.39658 11.0613C9.39658 11.4976 9.04286 11.8514 8.60653 11.8514H5.44631C5.00998 11.8514 4.65625 11.4976 4.65625 11.0613C4.65625 10.625 5.00998 10.2712 5.44631 10.2712H8.60653Z" ></path>
                  <path fill="var(--info)" d="M11.7667 13.4315C12.2031 13.4315 12.5568 13.7852 12.5568 14.2215C12.5568 14.6579 12.2031 15.0116 11.7667 15.0116H5.44631C5.00998 15.0116 4.65625 14.6579 4.65625 14.2215C4.65625 13.7852 5.00998 13.4315 5.44631 13.4315H11.7667Z" ></path>
                  <path fill="var(--info)" fillRule="evenodd" clipRule="evenodd" d="M19.0131 1.5068C18.4058 0.91424 17.4369 0.575534 16.4609 0.366592C15.4492 0.150018 14.2789 0.0431709 13.1318 0.0112697C11.9812 -0.0207246 10.8309 0.0220756 9.8509 0.113393C8.89222 0.202726 8.03108 0.344107 7.49484 0.534369C6.4026 0.921906 5.81982 1.5946 5.56032 2.35419C5.42964 2.7367 5.38973 3.13192 5.37976 3.45868C1.01604 4.01959 0.212642 5.9401 0.944058 11.1127C1.85807 17.5766 3.73266 18.9621 11.565 18.9621C16.9894 18.9621 19.3683 18.2975 20.0146 15.7416L20.0211 15.7433C20.1398 15.2685 20.2521 14.267 20.3327 13.0701C20.4151 11.8475 20.4686 10.3523 20.4541 8.85143C20.4396 7.35488 20.3572 5.83034 20.1617 4.55782C20.0641 3.9222 19.9351 3.32852 19.7632 2.82363C19.5969 2.33501 19.3644 1.84955 19.0131 1.5068ZM18.7887 6.64433C18.7446 5.98458 18.6812 5.35995 18.5949 4.79863C18.5052 4.21454 18.3938 3.71992 18.2627 3.33459C18.126 2.933 17.9929 2.72633 17.9062 2.64171C17.6375 2.37953 17.0498 2.11407 16.1291 1.91697C15.2441 1.72751 14.1775 1.62646 13.0877 1.59615C12.0012 1.56594 10.9147 1.60662 9.99794 1.69205C9.05991 1.77946 8.36457 1.90808 8.0248 2.02863C7.36503 2.26272 7.15532 2.58881 7.06033 2.86686C7.00967 3.01517 6.98499 3.1633 6.97348 3.31923C7.6899 3.28032 8.47867 3.26336 9.34515 3.26336C14.8815 3.26336 17.441 3.95558 18.7887 6.64433ZM18.3809 11.1127C17.9211 7.86129 17.2778 6.6146 16.4057 5.97006C15.9435 5.6285 15.2495 5.32817 14.11 5.12445C12.9664 4.91999 11.4956 4.83323 9.56713 4.83323C7.63868 4.83323 6.19246 4.91999 5.10663 5.12445C4.02475 5.32817 3.41564 5.6285 3.05006 5.97006C2.36023 6.6146 2.06947 7.86129 2.52923 11.1127C2.98898 14.3641 3.63231 15.6108 4.50442 16.2554C4.96659 16.5969 5.66064 16.8973 6.80013 17.101C7.94378 17.3054 9.41454 17.3922 11.343 17.3922C13.2715 17.3922 14.7177 17.3054 15.8035 17.101C16.8854 16.8973 17.4945 16.5969 17.8601 16.2554C18.5499 15.6108 18.8407 14.3641 18.3809 11.1127Z" fillOpacity="0.4"></path>
                </svg>
                <p>
                  تعدا سوالات:
                  <span>{!examContext.QuizDataLoading && examContext.QuizData.questions}</span>
                </p>
              </div>
              <div className="line"></div>
              <div className="ExamDetailBox">
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M11.8445 21.6619C8.15273 21.6619 5 21.0874 5 18.7867C5 16.4859 8.13273 14.3619 11.8445 14.3619C15.5364 14.3619 18.6891 16.4653 18.6891 18.7661C18.6891 21.0659 15.5564 21.6619 11.8445 21.6619Z" stroke="var(--info)" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.8372 11.1737C14.26 11.1737 16.2236 9.21002 16.2236 6.7873C16.2236 4.36457 14.26 2.40002 11.8372 2.40002C9.41452 2.40002 7.44998 4.36457 7.44998 6.7873C7.4418 9.20184 9.3918 11.1655 11.8063 11.1737C11.8172 11.1737 11.8272 11.1737 11.8372 11.1737Z" stroke="var(--info)" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>
                  طراح سوال:
                  <span>{!examContext.QuizDataLoading && examContext.QuizData.creator}</span>
                </p>
              </div>
              <div className="line"></div>
              <div className="ExamDetailBox">
                <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="var(--info)" d="M5.1645 8.0241C5.11438 8.00192 5.06377 7.97948 5.01266 7.9568C4.51481 7.73581 4.07111 7.53886 3.68157 7.36072C3.29511 8.06188 3.16016 9.20575 3.16016 11.0606C3.16016 15.0109 4.34064 15.8009 9.84848 15.8009C15.011 15.8009 16.5911 15.0109 16.5911 11.0606C16.5911 9.21031 16.4507 8.06751 16.0584 7.3659C15.6716 7.54267 15.2316 7.73795 14.7386 7.9568C14.6826 7.98165 14.6273 8.00619 14.5725 8.03043C14.5744 8.03136 14.5763 8.03228 14.5782 8.03321L14.5814 8.0343C14.6009 8.04007 14.6874 8.06563 14.7914 8.42543C14.9284 8.89948 15.011 9.69484 15.011 11.0606C15.011 12.8945 14.6342 13.3615 14.2812 13.5961C14.0259 13.7657 13.5948 13.9367 12.8374 14.0544C12.0837 14.1714 11.1125 14.2208 9.84848 14.2208C8.49376 14.2208 7.48346 14.1711 6.7194 14.0539C5.9498 13.9359 5.55732 13.7668 5.34746 13.6193C5.06745 13.4225 4.74027 13.0082 4.74027 11.0606C4.74027 9.69215 4.81959 8.89337 4.95428 8.41526C5.01619 8.19553 5.07415 8.10413 5.09609 8.07469C5.10927 8.05702 5.11803 8.04721 5.15365 8.02937C5.15714 8.02762 5.16076 8.02586 5.1645 8.0241Z"></path>
                  <path fillRule="evenodd" fill="var(--info)" clipRule="evenodd" d="M4.31379 9.20518C6.51968 10.2931 8.15103 11.0611 9.87571 11.0611C11.6004 11.0611 13.2317 10.2931 15.4376 9.20518L15.5158 9.1666C16.5934 8.63517 17.5061 8.18506 18.1423 7.79282C18.4668 7.59281 18.817 7.35015 19.0999 7.0536C19.382 6.75796 19.7514 6.24484 19.7514 5.53075C19.7514 4.81666 19.382 4.30354 19.0999 4.0079C18.817 3.71135 18.4668 3.46868 18.1423 3.26868C17.5061 2.87644 16.5934 2.42633 15.5158 1.8949L15.4376 1.85633C13.2317 0.768376 11.6004 0.000366211 9.87571 0.000366211C8.15103 0.000366211 6.51968 0.768371 4.31379 1.85633L4.23559 1.89489C3.15798 2.42633 2.24528 2.87644 1.60904 3.26868C1.28463 3.46869 0.934393 3.71135 0.651442 4.0079C0.369742 4.30314 0.00100774 4.81527 5.25074e-06 5.52784C1.7513e-06 5.52881 0 5.52978 0 5.53075V11.8512C0 12.2875 0.35372 12.6413 0.790055 12.6413C1.22639 12.6413 1.58011 12.2875 1.58011 11.8512L1.58011 7.77491C1.58978 7.78092 1.59942 7.78689 1.60904 7.79282C2.24528 8.18506 3.15796 8.63516 4.23555 9.16659L4.31379 9.20518ZM5.01272 7.78805C9.58954 10.0454 10.1619 10.0454 14.7387 7.78805C19.3155 5.53075 19.3155 5.53075 14.7387 3.27345C10.1619 1.01616 9.58954 1.01615 5.01272 3.27345C2.72432 4.4021 1.58011 4.96643 1.58011 5.53075C1.58011 6.09508 2.72432 6.6594 5.01272 7.78805Z" fillOpacity="0.4"></path>
                </svg>
                <p>
                  سطح آزمون:
                  <span>{!examContext.QuizDataLoading && examContext.QuizData.type}</span>
                </p>
              </div>

            </div>
            {
              examContext.QuizData.isCreator && !examContext.QuizDataLoading
                ?
                <div className="StartBtn red">شما بعنوان طراح سوال نمی توانید در آزمون شرکت کنید</div>
                : !examContext.QuizDataLoading ?
                  <div className={`StartBtn ripple-btn${isLoading ? ' loading' : ''}`} onClick={StartExam}>
                    {
                      isLoading
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
                        : 'شروع آزمون '
                    }

                  </div>
                  : null
            }

            <div className="warningBox">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.8963 10.4283C19.9448 10.2243 19.969 10.1223 19.9858 9.9725C20.0027 9.82271 20.0015 9.69923 19.9992 9.45229C19.9273 1.72634 18.0952 0.0507812 10.1458 0.0507812C2.19632 0.0507812 0.36423 1.72634 0.29232 9.45228C0.290022 9.69919 0.288873 9.82272 0.305708 9.9725C0.32254 10.1223 0.346761 10.2243 0.395196 10.4282C1.857 16.5834 7.04708 18.8789 9.19962 19.5791C9.57093 19.6999 9.75659 19.7603 10.1458 19.7603C10.5349 19.7603 10.7206 19.6999 11.0919 19.5791C13.2444 18.8789 18.4345 16.5834 19.8963 10.4283ZM18.3567 9.4677C18.3204 5.56973 17.8011 3.90879 16.8989 3.05354C15.9682 2.17126 14.176 1.70005 10.1458 1.70005C6.11554 1.70005 4.32336 2.17126 3.39261 3.05354C2.49038 3.90879 1.97114 5.56973 1.93486 9.4677C1.93235 9.73762 1.93445 9.7563 1.93794 9.78738C1.94045 9.80968 1.9427 9.82405 1.94784 9.84928C1.95564 9.88752 1.96686 9.93556 1.99302 10.0457C3.25018 15.3391 7.71907 17.3638 9.7059 18.0101C9.80351 18.0419 9.86506 18.0618 9.91843 18.0778C9.96774 18.0925 9.99319 18.0987 10.0075 18.1018L10.009 18.1021C10.0213 18.1047 10.0503 18.111 10.1458 18.111C10.2413 18.111 10.2702 18.1047 10.2826 18.1021L10.284 18.1018C10.2983 18.0987 10.3238 18.0925 10.3731 18.0778C10.4265 18.0618 10.488 18.0419 10.5856 18.0101C12.5725 17.3638 17.0414 15.3391 18.2985 10.0457C18.3247 9.93556 18.3359 9.88752 18.3437 9.84928C18.3488 9.82406 18.3511 9.80986 18.3536 9.78756C18.3571 9.75648 18.3592 9.73763 18.3567 9.4677Z" fill="#FFA826" fillOpacity="0.4"></path>
                <path d="M10.9668 5.82366C10.9668 5.36823 10.5991 4.99902 10.1455 4.99902C9.69194 4.99902 9.32422 5.36823 9.32422 5.82366V10.7715C9.32422 11.2269 9.69194 11.5961 10.1455 11.5961C10.5991 11.5961 10.9668 11.2269 10.9668 10.7715V5.82366Z" fill="#FFA826"></path>
                <path d="M10.1455 12.4207C9.69194 12.4207 9.32422 12.7899 9.32422 13.2454C9.32422 13.7008 9.69194 14.07 10.1455 14.07C10.5991 14.07 10.9668 13.7008 10.9668 13.2454C10.9668 12.7899 10.5991 12.4207 10.1455 12.4207Z" fill="#FFA826"></path>
              </svg>
              <span>نتیجه این آزمون تنها یک بار ثبت می‌شود، با دقت به سوالات پاسخ دهید. </span>
            </div>
            <Ripple />
          </Fragment>
      }

    </div>
  )
}
