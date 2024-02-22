const initialState ={
    title: 'old title'
}
export default function reduser(state, action) {
    if (action.type === 'CHANGE_TITLE'){
        return {title: 'new title'}
    }

    return state4
}