import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import './Quiz.css'
import ExamContext from './../../../Contexts/ExamContext'
import AppContext from '../../../Contexts/AppContext'

export default function QuizMain() {

  const appContext = useContext(AppContext)
  let [QuizData , setQuizData] = useState(false)
  let [QuizDataLoading , setQuizDataLoading] = useState(false)
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    setQuizDataLoading(true)
    appContext.HttpRequest.post(`checkQuizPages/${param.quiz_id}`)
    .then(res => {
      setQuizData(res.data)
      setQuizDataLoading(false)
    })
    .catch(err => {
      navigate('/')
      setQuizDataLoading(false)
    })
  },[])

  return (
    <ExamContext.Provider value={{ 
      QuizData,
      QuizDataLoading
     }}>
      <div className="ContrainerExam">
        <div className="ExamSection">
          <div className="topExamSec">
            <Link className='goHomeLink' to="/">
              <svg viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1474 1.0459L14.1914 5.08994M14.1914 5.08994H1.25047M14.1914 5.08994L10.1474 9.13399" strokeWidth="1.09189" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>بازگشت به خانه</span>
            </Link>
            <p className="QuizName">{
              !QuizDataLoading ? QuizData.title : 'در حال دریافت ...'
            }</p>
          </div>
          <div className="bottomExamSec">
            <div className="ExamSecBox">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ExamContext.Provider>
  )
}
