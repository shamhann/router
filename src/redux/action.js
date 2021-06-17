export const loadCards = () => {
    return dispatch => {
        dispatch({
            type: 'card/load/start'
        });
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'card/load/success',
                    payload: json
                })
            })
    }
}
export const loadModal = () => {
    return dispatch => {
        dispatch({
            type: 'modal/load/start'
        });
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'modal/load/success',
                    payload: json
                })
            })
    }
}
