const initialState = {
    items: [],
    loading: false
}
const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'card/load/start':
            return {
                ...state,
                loading: true
            }
        case 'card/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default cardsReducer;