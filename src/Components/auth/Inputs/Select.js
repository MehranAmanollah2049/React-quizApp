import React, { useEffect, useRef, useState } from 'react'
import './Input.css'

export default function Select(props) {

    let [isOpen, setOpen] = useState(false)
    let [drpHeight, setHeight] = useState(0)
    const ref = useRef(null)
    let [FilterData , setFilterData] = useState([])
    let [SearchVal , setSearchVal] = useState('')

    useEffect(() => {
        if (isOpen) {
            setHeight(ref.current.clientHeight)
        }
        else {
            setHeight(0)
        }
    })

    function toggleSelectDrp() {
        setOpen(prev => !prev)
    }

    function handleSelect(option) {

        props.onSelectOption(option[props.selectedBy])
     
    }

    function FilterOptions() {

        if(SearchVal != '') {
            setFilterData(props.options.filter(item => item.title.includes(SearchVal)))
        }
        else {
            setFilterData(props.options)
        }
    }

    useEffect(() => {
        FilterOptions()
    },[SearchVal,props.options])

    return (
        <div className={`Int-box${props.classNameText ? ' ' + props.classNameText : '' }`}>
            <label className='int-label'>{props.label}</label>
            <div className={`select-box${isOpen ? ' active' : ''}`} >
                <div className={`int-section-select${isOpen ? ' open' : ''}`}>
                    <div className="topSelect" onClick={toggleSelectDrp}>
                        <span className="selected-text">
                            {
                                props.selected != null ? props.options.find(item => item[props.selectedBy] == props.selected).title : props.defaultPlaceHolder
                            }
                        </span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="selectBoxDrp" style={{ height: drpHeight + 'px' }}>
                        <div className="select-box-under" ref={ref}>
                            <div className="search-box-select">
                                <input type="text" placeholder='جست و جو کنید ...' value={SearchVal} onChange={(e) => setSearchVal(e.target.value)} />
                            </div>
                            <div className="select-options">
                                {
                                    FilterData.length != 0 && props.optionLoading == false
                                        ?
                                        FilterData.map(option => (
                                            <div className={`select-option${props.selected == option[props.selectedBy] ? ' selected' : ''}`} key={option.id} onClick={() => handleSelect(option)}>
                                                <div className="check-select">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 507.506 507.506" xmlSpace="preserve" ><g><path d="M163.865 436.934a54.228 54.228 0 0 1-38.4-15.915L9.369 304.966c-12.492-12.496-12.492-32.752 0-45.248 12.496-12.492 32.752-12.492 45.248 0l109.248 109.248L452.889 79.942c12.496-12.492 32.752-12.492 45.248 0 12.492 12.496 12.492 32.752 0 45.248L202.265 421.019a54.228 54.228 0 0 1-38.4 15.915z" opacity="1" dataoriginal="#000000" ></path></g></svg>
                                                </div>
                                                <span className="option-text">{option.title}</span>
                                            </div>
                                        ))
                                        :
                                        props.optionLoading
                                            ? <div className="empty-select">در حال دریافت اطلاعات ...</div>
                                            : <div className="empty-select">موردی یافت نشد</div>


                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`select-overlay${isOpen ? ' active' : ''}`} onClick={toggleSelectDrp}></div>
        </div>
    )
}
