import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadModal} from "../redux/action";

function Modal(active,setActive) {
    const id = parseInt(useParams().id)
    const dispacth = useDispatch();

    useEffect(() => {
        dispacth(loadModal(id))
    },[id])
    return (
        <div className= 'modal'>
            <div className='modalOne'>
                <div className='modalPhoto'>

                </div>
               <div className='input'>
                   <input type="text" className='NameInput' value='Ваше имя'/>
                   <input type="text" className='NameInput' value='Ваш  комментарий'/>
               </div>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <button className='commentBtn'>
                        Оставить комментарий
                    </button>
                </div>
            </div>
          <div className='modalTwo'>
              <Link to={'/'}>
                  <div className='btn'>
                      del
                  </div>
              </Link>
          </div>
        </div>
    );
}

export default Modal;