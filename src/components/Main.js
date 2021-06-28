import React from 'react';
import {Route} from "react-router-dom"
import Card from "./Card";
import Modal from "./Modal";
function Main(props) {

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