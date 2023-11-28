import React, { useContext, useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import PanelContext from '../../../Contexts/PanelContext';
import AppContext from '../../../Contexts/AppContext';
import Input from '../../auth/Inputs/Input';
import Form from '../../auth/Forms/Form';
import { useParams } from 'react-router-dom';
import Alert from './../../../Tools/Js/Alert'

export default function EditQuestions() {

    const loadingContext = useLoadingContext();
    const panelContext = useContext(PanelContext)
    const appContext = useContext(AppContext)

    const param = useParams()

    let [FormDataInts, setFormData] = useState({
        title: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    useEffect(() => {

        appContext.HttpRequest.get(`exam/getQuestion/${param.question_id}`)
            .then(res => {
                setFormData({
                    title: res.data.title,
                })
                loadingContext.done();
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
                loadingContext.done();
            })
        panelContext.setTitlePanel('ویرایش پرسش های <span>آزمون</span>')
    }, [])

    function EditData(e) {
        e.preventDefault()

        if (FormDataInts.title != '') {

            setFormLoading(true)
            appContext.HttpRequest.post(`exam/questions/edit/${param.question_id}`, FormDataInts)
                .then(res => {
                
                    Alert('success', `اطلاعات با موفقیت ویرایش شدند`)
                    setFormData({
                        title: res.data.title,
                    })

                    setFormLoading(false)
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
                    setFormLoading(false)
                })

        }
        else {
            Alert('error', 'لطفا اطلاعات خواسته شده را وارد کنید')
        }
    }

    return (
        <div className="SectionContainer">
            <Form
                title="فرم ویرایش پرسش های آزمون"
                loading={FormLoading}
                onSubmitForm={EditData}
                btnText="ویرایش اطلاعات آزمون"
            >

                <Input
                    classNameText="num-1"
                    label="عنوان پرسش"
                    value={FormDataInts.title}
                    onChageEvent={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />

            </Form>
        </div>
    )
}
