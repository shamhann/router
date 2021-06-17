import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCards} from "../redux/action";
import {Route, useParams} from "react-router-dom"
import Card from "./Card";
import Modal from "./Modal";
function Main(props) {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCards(params.id))
    },[params]);


    return (
        <div className='main'>
           <Card />
           <Route path='/:id'>
               <Modal/>
           </Route>
        </div>
    );
}

export default Main;