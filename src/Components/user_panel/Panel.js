import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Panel.css'
import AppContext from './../../Contexts/AppContext'
import PanelContext from './../../Contexts/PanelContext'

export default function Panel() {

  const appContext = useContext(AppContext)
  let [drp, setDrp] = useState(false)
  const [DrpData, setHeight] = useState(0)
  const ref = useRef(null)
  let [TitlePanel , setTitlePanel] = useState(' آزمون های <span> من </span> ')

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  function handleDrp() {
    setDrp(prev => !prev)
  }


  return (
    <PanelContext.Provider value={{ 
      setTitlePanel
     }}>
      <div className="panelContainer">
        <div className="panelSection">
          <div className="panelMenu">
            <p className="titlePanel" dangerouslySetInnerHTML={{ __html: TitlePanel }}></p>
            <div className={`leftPanel${drp == false ? ' close' : ''}`} onClick={handleDrp}>
              <div className="drpPanel" style={{ height: DrpData }} >
                <div className="drpContent" ref={ref}>
                  <svg className='arrow-drp' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className='profile-icon' viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" _ngcontent-bpw-c81="" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9993 2.16675C7.01626 2.16675 2.16602 7.01699 2.16602 13.0001C2.16602 18.9832 7.01626 23.8334 12.9993 23.8334C18.9824 23.8334 23.8327 18.9832 23.8327 13.0001C23.8327 7.01699 18.9824 2.16675 12.9993 2.16675ZM16.3768 16.3091C17.9855 16.3091 19.3054 17.5451 19.4387 19.1193C17.8203 20.8218 15.5338 21.8832 12.9993 21.8832C10.4967 21.8832 8.23571 20.8482 6.62113 19.183C6.72485 17.5784 8.05914 16.3091 9.68991 16.3091H16.3768ZM9.70419 10.6909C9.70419 8.82376 11.2178 7.31009 13.085 7.31009C14.9521 7.31009 16.4658 8.82376 16.4658 10.6909C16.4658 12.5581 14.9521 14.0717 13.085 14.0717C11.2178 14.0717 9.70419 12.5581 9.70419 10.6909Z" _ngcontent-bpw-c81=""></path>
                  </svg>
                  <p className="username">{
                    appContext.authLoading == false && appContext.auth.name + ' ' + appContext.auth.family
                  }</p>
                  <span className='money'>اعتبار : 0 تومان</span>
                  <div className="optionsAll">
                    <NavLink to="#" className="options">مشاهده پروفایل</NavLink>
                    <NavLink to="#" className="options">آزمون های من</NavLink>
                    <div className="options logOut" onClick={appContext.logOut}>خروج از حساب</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`overlay${drp ? ' active' : ''}`} onClick={handleDrp}></div>
          </div>
          <Outlet />
        </div>
      </div>
    </PanelContext.Provider>

  )
}
