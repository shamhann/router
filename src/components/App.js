import React, {useEffect} from 'react';
import Header from "./header/Header";
import Main from "./Main";
import Footer from "./footer/Footer";
import {useDispatch} from "react-redux";
import {loadCards} from "../redux/action";
function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCards())
  },[])
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;