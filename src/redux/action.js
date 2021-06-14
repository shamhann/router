export const loadAlbums = () => {
    return dispatch => {
        dispatch({
            type: 'albums/load/start'
        });
        fetch('https://jsonplaceholder.typicode.com/albums/?_limit=15')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'albums/load/success',
                    payload: json
                })
            })
    }
}
export const loadPhotos = (id) => {
    return dispatch => {
        dispatch({
            type: 'photo/load/start'
        });
        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'photo/load/success',
                    payload: json
                })
            })
    }
}