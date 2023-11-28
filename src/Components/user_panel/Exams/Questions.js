import React, { Fragment, useContext, useEffect, useReducer, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import Input from '../../auth/Inputs/Input';
import PanelContext from '../../../Contexts/PanelContext';
import Form from '../../auth/Forms/Form';
import './Exam.css'
import Alert from '../../../Tools/Js/Alert';
import AppContext from '../../../Contexts/AppContext';
import { useParams } from 'react-router-dom';
import QuestionReducer from './../../../Reducer/QuestionReducer'
import Row from '../../auth/Tables/Rows/Row';
import DrpBtn from '../../auth/Tables/Rows/DrpBtns/DrpBtn';
import Tooltip from '../../auth/Tables/Rows/Tooltips/Tooltip';
import Table from '../../auth/Tables/Table';

export default function Questions() {

    const loadingContext = useLoadingContext();
    const panelContext = useContext(PanelContext)
    const appContext = useContext(AppContext)

    const param = useParams()

    useEffect(() => {
        loadingContext.done();
        panelContext.setTitlePanel('ثبت پرسش های <span>آزمون</span>')
    }, [])


    let [FormDataInts, setFormData] = useState({
        title: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    let [Questions, DispatchQuetions] = useReducer(QuestionReducer, [])
    let [TableLoading, setTableLoading] = useState(false)

    useEffect(() => {
        setTableLoading(true)

        appContext.HttpRequest.get(`exam/questions/${param.quiz_id}/get`).then(res => {
            DispatchQuetions({ type: 'setQuestionData', data: res.data })
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

    function InserData(e) {

        e.preventDefault()

        if (FormDataInts.title != '') {

            setFormLoading(true)

            appContext.HttpRequest.post(`exam/questions/${param.quiz_id}/add`, FormDataInts)
                .then(res => {
                    Alert('success', 'پرسش با موفقیت ثبت شد')
                    setFormData({
                        title: ''
                    })
                    DispatchQuetions({ type: 'add', data: res.data })
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

    let [DeleteLoading, setDeleteLoading] = useState(false)

    function DeleteControl(id) {

        setDeleteLoading(id)

        appContext.HttpRequest.delete(`exam/questions/delete/${id}`)
            .then(res => {
                DispatchQuetions({ type: 'delete', data: id })
                setDeleteLoading(false)
                Alert('success', 'عملیات با موفقیت انجام شد')
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
                    title="فرم ثبت پرسش های آزمون"
                    loading={FormLoading}
                    onSubmitForm={InserData}
                    btnText="ثبت اطلاعات آزمون"
                >

                    <Input
                        classNameText="num-1"
                        label="عنوان پرسش"
                        value={FormDataInts.title}
                        onChageEvent={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />

                </Form>
            </div>
            <div className="SectionContainer">
                <Table
                    title="لیست پرسش ها"
                    isLoading={TableLoading}
                    thData={[
                        { id: 1, title: 'ردیف', cloNum: 8, position: 'center' },
                        { id: 2, title: 'عنوان', cloNum: 3, position: 'flex-start' },
                        { id: 3, title: 'گزینه ها', cloNum: 7, position: 'center' },
                        { id: 4, title: 'دارای گزینه درست', cloNum: 5, position: 'center' },
                        { id: 5, title: 'عملیات', cloNum: 8, position: 'center' },
                    ]}
                >
                    {
                        Questions.map((Question, index) => (
                            <Row
                                key={Question.id + 'Question'}
                                operationCol={8}
                                loading={DeleteLoading == Question.id ? true : false}
                                btns={[
                                    <DrpBtn key="row-1" title="ویرایش" theme="blue" link={`/panel/exam/${Question.id}/Editquestions`} />,
                                    <DrpBtn key="row-2" title="ثبت گزینه ها" theme="green" link={`/panel/exam/${Question.id}/answers`} />,
                                    <DrpBtn key="row-3" title="حذف" theme="red" onClickEvent={() => DeleteControl(Question.id)} />
                                ]}
                            >
                                <div className="RowBox" style={{ width: `calc(100% / 8)` }}>{index + 1}</div>
                                <div className="RowBox rightArrow leftArrow" style={{ width: `calc(100% / 3)`, justifyContent: 'flex-start', gap: 10 }}>
                                    <span className='text-span2'>{Question.title}</span>
                                    <Tooltip title={Question.title} />
                                </div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 7)` }}>{Question.answers_num} گزینه</div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 5)` }}>{Question.hasnswer ? <span className='tag success'>گزینه درست ثبت شده</span> : <span className='tag error'>گزینه درست ثبت نشده</span>}</div>

                            </Row>
                        ))
                    }

                </Table>
            </div>
        </Fragment>
    )
}
