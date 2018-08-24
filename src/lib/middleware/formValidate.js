const formValidate = store => next => action => {
    if(action.type === 'CATEGORY_CREATE'){
        if(action.payload.name === ''){
            alert('Please enter name');
        }else {
            next(action)
        }
    }else {
        next(action)
    }
}

export default formValidate;