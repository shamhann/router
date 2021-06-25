import React from 'react';
import {Link} from "react-router-dom";

function Photo(props) {

    return (
        <Link  to={`/${props.card.id}`}>
            <img className='image' src={props.card.url} alt="" />
        </Link>
    );
}

export default Photo;