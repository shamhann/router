import React from 'react';

function Photo(props) {
    return (
        <li className='list-group-item list-group-flush'>
            <img src={props.photo.url} alt="image"/>
        </li>
    );
}

export default Photo;