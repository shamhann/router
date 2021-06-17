import React, {useEffect} from 'react';
import { Route } from  "react-router-dom"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {loadCards} from "../redux/action";

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCards())
    },[])
    return (
        <Route path='/:id?'>
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </Route>
    );
}

export default App;
