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
export const loadModal = (id) => {
    return dispatch => {
        dispatch({
            type: "modal/load/start"
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "modal/load/success",
                    payload: {
                        url: json.url,
                    }
                })
            })
    }
}
export const loadComment = (id, name, text) => {
    return dispatch => {
        dispatch({
            type: "comments/load/start"
        })
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                text: text,
                date:new Date().toLocaleString()
            }),
            headers: {
                "Content-type" : "application/json;"
            }
        })
            .then(() => {
                dispatch({
                    type: "comments/load/success",
                    payload: {
                        name: name,
                        text: text,
                        date: new Date().toLocaleString()
                    }
                })
            })
    }
}
