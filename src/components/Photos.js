import React, {useEffect} from 'react';
import Photo from "./Photo";
import {useParams} from  "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos} from "../redux/action";

function Photos(props) {
    const params = useParams()
    const dispatch = useDispatch();

    const photos = useSelector(state => state.photos.items);
    const loading = useSelector(state => state.photos.loading)

    useEffect(() => {
        if(params.id !== undefined) {
            dispatch(loadPhotos(params.id))
        }
    },[params])

    if (loading){
        return (
            <div>
                loading photo
            </div>
        )
    }
    return (
        <ul className='list-group'>
            {photos.map(photo => {
                return <Photo key={photo.id} photo={photo}/>
            })}

        </ul>
    );
}

export default Photos;