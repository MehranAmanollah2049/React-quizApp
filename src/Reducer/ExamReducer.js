
function ExamReducer(state , action) {
    
    let { type } = action

    if(type == 'setExamData') {
        return action.data
    }
    else if(type == 'add') {
        return addExamList(state,action)
    } 
    else if(type == 'delete') {
        return deleteExam(state,action)
    }

}

function addExamList(state , action) {

    return [
        ...state,
        action.data
    ]
}

function deleteExam(state , action) {

    return state.filter(item => item.id != action.id)
}


export default ExamReducer