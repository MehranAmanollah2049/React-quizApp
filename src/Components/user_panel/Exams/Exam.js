import React, { Fragment, useContext, useEffect, useReducer, useState } from 'react'
import './Exam.css'

import { useLoadingContext } from 'react-router-loading';
import Form from '../../auth/Forms/Form';
import Input from './../../auth/Inputs/Input'
import Select from '../../auth/Inputs/Select';
import Alert from './../../../Tools/Js/Alert'
import Uploader from '../../auth/Inputs/Uploader';
import Table from '../../auth/Tables/Table';
import Row from '../../auth/Tables/Rows/Row';
import Tooltip from '../../auth/Tables/Rows/Tooltips/Tooltip';
import DrpBtn from '../../auth/Tables/Rows/DrpBtns/DrpBtn';
import AppContext from './../../../Contexts/AppContext'
import ExamReducer from '../../../Reducer/ExamReducer';

export default function Exam() {

    const appContext = useContext(AppContext)
    const loadingContext = useLoadingContext();

    useEffect(() => {
        loadingContext.done();
    }, [])

    let [FormDataInts, setFormData] = useState({
        title: '',
        type: null,
        banner: '',
        imgpreview: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    let [Exams, ExamDispatch] = useReducer(ExamReducer, []);
    let [TableLoading, setTableLoading] = useState(false)

    useEffect(() => {
        setTableLoading(true)

        appContext.HttpRequest.get('exam/get').then(res => {
            ExamDispatch({ type: 'setExamData', data: res.data })
            setTableLoading(false)
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

                setTableLoading(false)
            })

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

    // insert data

    function InserData(e) {

        e.preventDefault();

        if (FormDataInts.title != '' && FormDataInts.type != null && FormDataInts.banner != '') {

            let data = new FormData();
            Object.entries(FormDataInts).map(item => {
                data.append(item[0], item[1])
            })

            setFormLoading(true)
            appContext.HttpRequest.post('exam/add', data)
                .then(res => {
                    Alert('success', `${FormDataInts.title} با موفقیت ثبت شد`)
                    setFormData({
                        title: '',
                        type: null,
                        banner: '',
                        imgpreview: '',
                    })
                    ExamDispatch({ type: 'add', data: res.data })
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

    let [deleteLoading, setDeleteLoading] = useState(false)

    function deleteExam(id) {

        setDeleteLoading(id)

        appContext.HttpRequest.delete(`exam/delete/${id}`)
            .then(res => {
                setDeleteLoading(false)
                ExamDispatch({ type: 'delete', id })
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

                setDeleteLoading(false)
            })

    }

    return (
        <Fragment>
            <div className="SectionContainer">
                <Form
                    title="فرم ثبت آزمون"
                    loading={FormLoading}
                    onSubmitForm={InserData}
                    btnText="ثبت اطلاعات آزمون"
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
            <div className="SectionContainer">
                <Table
                    title="لیست آزمون ها"
                    isLoading={TableLoading}
                    thData={[
                        { id: 1, title: 'ردیف', cloNum: 9, position: 'center' },
                        { id: 2, title: 'عنوان', cloNum: 3.8, position: 'flex-start' },
                        { id: 3, title: 'سطح', cloNum: 6, position: 'center' },
                        { id: 4, title: 'شرکت کنند', cloNum: 7, position: 'center' },
                        { id: 5, title: 'تعداد سوالات', cloNum: 7, position: 'center' },
                        { id: 6, title: 'عملیات', cloNum: 9, position: 'center' },
                    ]}
                >
                    {
                        Exams.map((exam, index) => (
                            <Row
                                key={exam.id + 'exam'}
                                operationCol={9}
                                loading={deleteLoading == exam.id ? true : false}
                                btns={[
                                    <DrpBtn key="row-1" title="ویرایش" theme="blue" link={`/panel/exam/edit/${exam.id}`} />,
                                    <DrpBtn key="row-2" title="ثبت سوالات" theme="green" link={`/panel/exam/${exam.id}/questions`} />,
                                    <DrpBtn key="row-3" title="حذف" theme="red" onClickEvent={(e) => deleteExam(exam.id)} />
                                ]}
                            >
                                <div className="RowBox" style={{ width: `calc(100% / 9)` }}>{index + 1}</div>
                                <div className="RowBox rightArrow leftArrow" style={{ width: `calc(100% / 3.8)`, justifyContent: 'flex-start', gap: 10 }}>
                                    <img src={appContext.mainUrl + exam.banner} alt="" />
                                    <span className='text-span'>{exam.title}</span>
                                    <Tooltip title={exam.title} />
                                </div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 6)` }}>{exam.type}</div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 7)` }}>{exam.pertipates}  شرکت کننده</div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 7)` }}>{exam.questions} سوال</div>

                            </Row>
                        ))
                    }

                </Table>
            </div>
        </Fragment>
    )
}
