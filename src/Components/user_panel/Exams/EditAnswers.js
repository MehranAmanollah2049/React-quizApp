import React, { useContext, useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import PanelContext from '../../../Contexts/PanelContext';
import AppContext from '../../../Contexts/AppContext';
import { useParams } from 'react-router-dom';
import Form from '../../auth/Forms/Form';
import Input from '../../auth/Inputs/Input';
import Alert from '../../../Tools/Js/Alert';

export default function EditAnswers() {

    const loadingContext = useLoadingContext();
    const panelContext = useContext(PanelContext)
    const appContext = useContext(AppContext)

    const param = useParams()

    let [FormDataInts, setFormData] = useState({
        title: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    useEffect(() => {

        appContext.HttpRequest.get(`exam/getAnswer/${param.answer_id}`)
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
        panelContext.setTitlePanel('ویرایش جواب های <span>پرسش ها</span>')
    }, [])

    function EditData(e) {
        e.preventDefault()

        if (FormDataInts.title != '') {

            setFormLoading(true)
            appContext.HttpRequest.post(`exam/answersAll/${param.answer_id}/editAnswer`, FormDataInts)
                .then(res => {
                
                    console.log(res.data)
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
                title="فرم ویرایش جواب های آزمون"
                loading={FormLoading}
                onSubmitForm={EditData}
                btnText="ویرایش اطلاعات آزمون"
            >

                <Input
                    classNameText="num-1"
                    label="عنوان جواب"
                    value={FormDataInts.title}
                    onChageEvent={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />

            </Form>
        </div>
    )
}
