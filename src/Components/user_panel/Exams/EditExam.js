import React, { useContext, useEffect, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import PanelContext from './../../../Contexts/PanelContext'
import Form from '../../auth/Forms/Form';
import Uploader from '../../auth/Inputs/Uploader';
import Input from '../../auth/Inputs/Input';
import Select from '../../auth/Inputs/Select';
import Alert from '../../../Tools/Js/Alert';
import AppContext from '../../../Contexts/AppContext';
import { useParams } from 'react-router-dom';
import './Exam.css'

export default function EditExam() {

    const loadingContext = useLoadingContext();
    const panelContext = useContext(PanelContext)
    const appContext = useContext(AppContext)
    const param = useParams()


    let [FormDataInts, setFormData] = useState({
        title: '',
        type: null,
        banner: '',
        imgpreview: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    useEffect(() => {

        appContext.HttpRequest.get(`exam/getSingle/${param.id}`)
            .then(res => {
                setFormData({
                    title: res.data.title,
                    type: res.data.type,
                    banner: '',
                    imgpreview: appContext.mainUrl + res.data.banner
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

        panelContext.setTitlePanel('ویرایش <span>آزمون</span>')

    }, [])

    // image upload

    function UploadImage(e) {

        let file = e.target.files[0]
        let reader = new FileReader();

        reader.addEventListener("load", () => {

            let type = file.type.replaceAll('image/', '')
            let size = file.size

            let maxSize = 500000
            let types = ['webp', 'jpg', 'jpeg', 'png']


            if (types.includes(type) && size <= maxSize) {
                setFormData(prev => ({
                    ...prev,
                    imgpreview: reader.result,
                    banner: file
                }))
            }
            else {

                if (!types.includes(type)) {
                    Alert('error', 'فقط فرمت های webp , jpg , jpeg , png مجاز می باشند')
                }
                else if (size > maxSize) {

                    Alert('error', 'سایز فایل آپلود شده بیشتر از حد مجاز است')
                }
            }

        })


        reader.readAsDataURL(file)

    }

    function deleteUploadImage() {

        setFormData(prev => ({
            ...prev,
            imgpreview: '',
            banner: ''
        }))
    }

    // Edit data

    function EditData(e) {

        e.preventDefault();

        if (FormDataInts.title != '' && FormDataInts.type != null && FormDataInts.imgpreview != '') {

            let data = new FormData();
            Object.entries(FormDataInts).map(item => {
                data.append(item[0], item[1])
            })


            setFormLoading(true)
            appContext.HttpRequest.post(`exam/edit/${param.id}`, data)
                .then(res => {
                    Alert('success', `اطلاعات با موفقیت ویرایش شدند`)
                    setFormData({
                        title: res.data.title,
                        type: res.data.type,
                        banner: '',
                        imgpreview: appContext.mainUrl + res.data.banner
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
                title="فرم ویرایش آزمون"
                loading={FormLoading}
                onSubmitForm={EditData}
                btnText="ویرایش اطلاعات آزمون"
            >
                <Uploader
                    Imgdata={FormDataInts.imgpreview}
                    formatsAllowed='webp , jpg , jpeg , png'
                    Maxsize='500KB'
                    UploadDataEvent={UploadImage}
                    DeleteDataEvent={deleteUploadImage}
                />
                <Input
                    classNameText="num-2"
                    label="عنوان آزمون"
                    value={FormDataInts.title}
                    onChageEvent={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
                <Select
                    classNameText="num-2"
                    label="سطح آزمون"
                    options={[
                        { id: 1, title: 'ساده' },
                        { id: 2, title: 'متوسط' },
                        { id: 3, title: 'پیشرفته' },
                    ]}
                    optionLoading={false}
                    selected={FormDataInts.type}
                    defaultPlaceHolder="انتخاب کنید"
                    selectedBy="title"
                    onSelectOption={(data) => {
                        if (FormDataInts.type == data) {
                            setFormData(prev => ({ ...prev, type: null }))
                        }
                        else {
                            setFormData(prev => ({ ...prev, type: data }))
                        }
                    }}
                />
            </Form>
        </div>
    )
}
