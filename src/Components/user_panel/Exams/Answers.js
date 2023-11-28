import React, { Fragment, useContext, useEffect, useReducer, useState } from 'react'
import { useLoadingContext } from 'react-router-loading';
import Input from '../../auth/Inputs/Input';
import PanelContext from '../../../Contexts/PanelContext';
import Form from '../../auth/Forms/Form';
import './Exam.css'
import Alert from '../../../Tools/Js/Alert';
import AppContext from '../../../Contexts/AppContext';
import { useParams } from 'react-router-dom';
import AnswerReducer from './../../../Reducer/AnswerReducer'
import Row from '../../auth/Tables/Rows/Row';
import DrpBtn from '../../auth/Tables/Rows/DrpBtns/DrpBtn';
import Tooltip from '../../auth/Tables/Rows/Tooltips/Tooltip';
import Table from '../../auth/Tables/Table';
import Toggle from '../../auth/Toggles/Toggle';

export default function Answers() {

    const loadingContext = useLoadingContext();
    const panelContext = useContext(PanelContext)
    const appContext = useContext(AppContext)

    const param = useParams()

    useEffect(() => {
        loadingContext.done();
        panelContext.setTitlePanel('ثبت جواب های <span>پرسش ها</span>')
    }, [])


    let [FormDataInts, setFormData] = useState({
        title: ''
    })
    let [FormLoading, setFormLoading] = useState(false)

    let [Answers, DispatchAnswers] = useReducer(AnswerReducer, [])
    let [TableLoading, setTableLoading] = useState(false)

    useEffect(() => {
        setTableLoading(true)

        appContext.HttpRequest.get(`exam/answers/${param.question_id}/get`).then(res => {
            DispatchAnswers({ type: 'setAnswersData', data: res.data })
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

            appContext.HttpRequest.post(`exam/answers/${param.question_id}/add`, FormDataInts)
                .then(res => {
                    Alert('success', 'پرسش با موفقیت ثبت شد')
                    setFormData({
                        title: ''
                    })
                    DispatchAnswers({ type: 'add', data: res.data })
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

        appContext.HttpRequest.delete(`exam/answers/delete/${id}`)
            .then(res => {
                DispatchAnswers({ type: 'delete', data: id })
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

    let [ToggleLoading, setToggleLoading] = useState(false)

    function toggleAnswer(id, type) {
        console.log(id, type)
        setToggleLoading(id)

        appContext.HttpRequest.post(`exam/answers/${id}/${type ? 'true' : 'false'}`)
        .then(res => {

            DispatchAnswers({ type: 'setAnswersData', data: res.data })
            setToggleLoading(false)
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
            setToggleLoading(false)
        })
    }

    return (
        <Fragment>
            <div className="SectionContainer">
                <Form
                    title="فرم ثبت جواب های آزمون"
                    loading={FormLoading}
                    onSubmitForm={InserData}
                    btnText="ثبت اطلاعات آزمون"
                >

                    <Input
                        classNameText="num-1"
                        label="عنوان جواب"
                        value={FormDataInts.title}
                        onChageEvent={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />

                </Form>
            </div>
            <div className="SectionContainer">
                <Table
                    title="لیست جواب ها"
                    isLoading={TableLoading}
                    thData={[
                        { id: 1, title: 'ردیف', cloNum: 8, position: 'center' },
                        { id: 2, title: 'عنوان', cloNum: 1.9, position: 'flex-start' },
                        { id: 3, title: 'گزینه درست', cloNum: 6, position: 'center' },
                        { id: 5, title: 'عملیات', cloNum: 8, position: 'center' },
                    ]}
                >
                    {
                        Answers.map((Answer, index) => (
                            <Row
                                key={Answer.id + 'Answer'}
                                operationCol={8}
                                loading={DeleteLoading == Answer.id ? true : false}
                                btns={[
                                    <DrpBtn key="row-1" title="ویرایش" theme="blue" link={`/panel/exam/${Answer.id}/EditAnswers`} />,
                                    <DrpBtn key="row-3" title="حذف" theme="red" onClickEvent={() => DeleteControl(Answer.id)} />
                                ]}
                            >
                                <div className="RowBox" style={{ width: `calc(100% / 8)` }}>{index + 1}</div>
                                <div className="RowBox rightArrow leftArrow" style={{ width: `calc(100% / 1.9)`, justifyContent: 'flex-start', gap: 10 }}>
                                    <span className='text-span2'>{Answer.title}</span>
                                    <Tooltip title={Answer.title} customClass="xs-remove" />
                                </div>
                                <div className="RowBox leftArrow" style={{ width: `calc(100% / 6)` }}>
                                    <span className='xs-title'>آیا این گزینه جواب سوال هست؟</span>
                                    <Toggle
                                        isActive={Answer.isCorrect}
                                        isLoading={ToggleLoading == Answer.id ? true : false}
                                        onClickEvent={() => toggleAnswer(Answer.id, !Answer.isCorrect)}
                                    />
                                </div>

                            </Row>
                        ))
                    }

                </Table>
            </div>
        </Fragment>
    )
}
