import React from 'react';
import {Link, useParams} from "react-router-dom";

function Album(props) {
    const openedAlbumId = parseInt(useParams().id)
    return (
        <li className={`list-group-item ${openedAlbumId === props.album.id ? 'list-group-item-info' : ''}`}>
            <Link to={`/${props.album.id}`}>
                {props.album.title}
            </Link>
        </li>
    );
}

export default Album;