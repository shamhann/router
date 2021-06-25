const initialState = {
    items: {},
    loading: false
}
const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'comment/load/start':
            return {
                ...state,
                loading: true
            }
        case 'comment/load/success':
            return {
                ...state,
                items:action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default comments;