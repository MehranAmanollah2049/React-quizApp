function AnswerReducer(state , action) {

    let {type} = action

    if(type == 'setAnswersData') {
        return action.data
    }
    else if(type == 'add') {
        return addData(state,action)
    }
    else if(type == 'delete') {
        return deleteData(state,action)
    }
  
}

function addData(state,action) {
    
    return [
        ...state,
        action.data
    ]
}

function deleteData(state , action) {

    return state.filter(item => item.id != action.data)
}



export default AnswerReducer