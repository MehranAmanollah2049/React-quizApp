import React, { useContext, useState } from 'react'
import Input from './Inputs/Input'
import Ripple from '../../Tools/Js/Ripple'
import AppContext from '../../Contexts/AppContext'
import Alert from './../../Tools/Js/Alert'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const appContext = useContext(AppContext)
  const navigate = useNavigate()

  let [isLoading, setLoading] = useState(false)
  let [FormData, setFormData] = useState({
    name: '',
    family: '',
    phone: '',
    password: ''
  })


  function FormSubmit(e) {
    e.preventDefault()

    let phoneRegx = /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/
    let nums = /[0-9]/g;
    let letters = /[a-z]/g;
    let letterBig = /[A-Z]/g;
    let specialChars = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
    let pass = FormData.password

    let strongPassword = nums.test(pass) && letterBig.test(pass) && letters.test(pass) || specialChars.test(pass)


    if (FormData.name != '' && FormData.family != '' && FormData.phone != '' && phoneRegx.test(FormData.phone) && (FormData.password != '' && FormData.password.length >= 8 && strongPassword)) {

      setLoading(true)

      appContext.HttpRequest.post('auth/register', FormData)
        .then(res => {
          
          setLoading(false)
          appContext.setToken(res.data['token'])
          appContext.setAuth(res.data['data'])
          Alert('success',`${FormData.name} عزیز , خوش آومدی`)
          setFormData({
            name: '',
            family: '',
            phone: '',
            password: ''
          })

          document.documentElement.scrollTop = 0;
          navigate('/')

        })
        .catch(err => {
          if (err.message != 'Request failed with status code 302') {

            Alert('error', 'با عرض پوزش , خطای در سیستم رخ داد لطفا بعدا امتحان کنید')
          }
          else {
            Alert('error', err.response.data)
          }
          setLoading(false)
        })

    }
    else {

      if (FormData.name == '' || FormData.family == '' || FormData.phone == '' || FormData.password == '') {
        Alert('error', 'لطفا اطلاعات خواسته شده رو وارد کنید')
      }
      else if (!phoneRegx.test(FormData.phone)) {
        Alert('error', 'شماره موبایل وارد شده معتبر نمی باشد')
      }
      else if (FormData.password.length < 8) {
        Alert('error', 'پسورد شما حداقل باید 8 کاراکتر باشد')
      }
      else if (!strongPassword) {
        Alert('error', 'پسورد باید دارای اعداد و حروف باشد و حداقل یک حروف بزرگ یا کاراکتر  خاص در ان باید استفاده شده باشد', 8000)
      }

    }
  }

  return (
    <form className="Auth-section" onSubmit={FormSubmit}>
      <p className="title_auth">عضویت در وبسایت</p>
      <p className="about_auth">  خوش آومدی ! برای عضویت اطلاعات زیر رو تکمیل کن</p>
      <div className="ints-content">
        <Input
          label="نام"
          value={FormData.name}
          onChageEvent={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        <Input
          label="نام خانوادگی"
          value={FormData.family}
          onChageEvent={(e) => setFormData(prev => ({ ...prev, family: e.target.value }))}
        />
        <Input
          label="شماره موبایل"
          value={FormData.phone}
          number={true}
          phoneMode={true}
          onChageEvent={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
        <Input
          label="پسورد"
          type="password"
          value={FormData.password}
          onChageEvent={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
        />
      </div>
      <button type='submit' className={isLoading ? `SubmitBtn ripple-btn loading` : 'SubmitBtn ripple-btn'}>
        {
          isLoading ?
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">

              <circle cx="50" cy="50" r="20" fill="none" stroke="#fff" opacity="0.3" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="200, 300">

              </circle>
              <circle className="stroke-current text-gray-500" cx="50" cy="50" r="20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="100, 200">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
              </circle>
            </svg>
            : <span>عضویت در وبسایت</span>

        }

      </button>
      <Ripple />
    </form>
  )
}
