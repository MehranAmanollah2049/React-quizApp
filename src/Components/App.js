import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-loading'
import AppContext from './../Contexts/AppContext'
import axios from 'axios'
import Alert from './../Tools/Js/Alert'

// loader
import { topbar } from "react-router-loading";
import { Navigate, useNavigate } from 'react-router-dom'





const Error404 = lazy(() => import('./website/Error404'))
const MainPage = lazy(() => import('./website/MainPage/MainPage'))
const Authenticte = lazy(() => import('./auth/Authenticte'))
const Register = lazy(() => import('./auth/Register'))
const LogIn = lazy(() => import('./auth/LogIn'))
const Panel = lazy(() => import('./user_panel/Panel'));
const Exam = lazy(() => import('./user_panel/Exams/Exam'));
const EditExam = lazy(() => import('./user_panel/Exams/EditExam'));
const Questions = lazy(() => import('./user_panel/Exams/Questions'));
const EditQuestions = lazy(() => import('./user_panel/Exams/EditQuestions'));
const Answers = lazy(() => import('./user_panel/Exams/Answers'));
const EditAnswers = lazy(() => import('./user_panel/Exams/EditAnswers'));
const QuizMain = lazy(() => import('./website/Exams/QuizMain'));
const StartPage = lazy(() => import('./website/Exams/StartPage'));
const ExamPage = lazy(() => import('./website/Exams/ExamPage'));
const ExamResultPage = lazy(() => import('./website/Exams/ExamResultPage'));



export default function App() {


  const mainUrl = 'https://quiz-laravel.iran.liara.run/';
  const navigate = useNavigate()

  topbar.config({
    autoRun: true,
    barThickness: 3,
    barColors: {
      0: '#3b82f6',
    },
    shadowBlur: 10,
    shadowColor: '#3b83f677',
    className: 'topbar'
  });

  let [auth, setAuth] = useState(false)
  let [authLoading, setAuthLoading] = useState(false)

  const HttpRequest = axios.create({
    baseURL: 'https://quiz-laravel.iran.liara.run/api/',
    headers: {
      token: getCookie('token')
    }
  })

  
  useEffect(() => {
    if (getCookie('token')) {

      setAuthLoading(true)

      HttpRequest.get('getUserData')
        .then(res => {
          setAuth(res.data != [] ? res.data : false)
          setAuthLoading(false)
        })
        .catch(err => {
          if (err.message == 'Request failed with status code 305') {
            Alert('error', 'خطایی در احراز هویت اطلاعات شما بوجود اومد')
            setAuth(false)
            removeCookie('token')
          }
          else if (err.message != 'Request failed with status code 305' && err.message != 'Request failed with status code 302') {
            Alert('error', 'با عرض پوزش , خطایی در سیتم بوجود آومد')
          }
          setAuthLoading(false)
        })
    }
  
  }, [])

  function setToken(token) {

    let now = new Date();
    now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000)

    document.cookie = `token=${token};path=/;expires=${now}`
  }

  function logOut() {

    navigate('/')
    removeCookie('token')
    setAuthLoading(false)
    setAuth(false)
  }

  function removeCookie(name) {

    let now = new Date();
    now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=null;path=/;expires=${now}`
  }


  return (
    <AppContext.Provider value={{
      HttpRequest,
      setToken,
      setAuth,

      auth,
      authLoading,
      logOut,

      mainUrl,

    }}>

      <div className="containerAll">
        <div className="NotificationContainer"></div>

        <Routes>
          {/* index */}
          <Route path='/' element={<MainPage />}  loading></Route>

          {/* auth */}
          <Route path='/auth' element={
            <NotRequireAuth>
              <Suspense fallback={null}><Authenticte /></Suspense>
            </NotRequireAuth>
          } loading>
            <Route path='' element={<LogIn />} loading></Route>
            <Route path='log-in' element={<LogIn />} loading></Route>
            <Route path='register' element={<Register />} loading></Route>
          </Route>


          {/* panel */}
          <Route path='/panel' element={
            <RequireAuth>
              <Suspense  fallback={null}><Panel /></Suspense>
            </RequireAuth>
          } loading>
            <Route path='' element={<Exam/>} loading></Route>
            <Route path='exam/edit/:id' element={<EditExam/>} loading></Route>
            <Route path='exam/:quiz_id/questions' element={<Questions/>} loading></Route>
            <Route path='exam/:question_id/Editquestions' element={<EditQuestions/>} loading></Route>

            <Route path='exam/:question_id/answers' element={<Answers/>} loading></Route>
            <Route path='exam/:answer_id/EditAnswers' element={<EditAnswers/>} loading></Route>

          </Route>

          {/* exam pages */}
          <Route path="/quiz/:quiz_id" element={
            <RequireAuth>
              <Suspense  fallback={null}>
                <QuizMain/>
              </Suspense>
            </RequireAuth>
          } loading>
            <Route path='' element={<StartPage/>} loading></Route>
            <Route path='questions/:type' element={<ExamPage/>} loading></Route>
            <Route path='result/:type' element={<ExamResultPage/>} loading></Route>
          </Route>


          <Route path='*' element={<Error404 />} ></Route>

        </Routes>

      </div>

    </AppContext.Provider>
  )
}

function getCookie(name) {

  let listOfCookies = document.cookie.split(';')
  let item = null
  listOfCookies.some(cookie => {
    if(cookie.includes(name)) {
      item = cookie.substring(cookie.indexOf('=') + 1);
      return true
    }
  })
  return item
}


function NotRequireAuth({ children }) {
  return !getCookie('token') ? children : <Navigate to="/" replace />;
}

function RequireAuth({ children }) {
  return getCookie('token') ? children : <Navigate to="/" replace />;
}