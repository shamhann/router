import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadComment, loadModal } from '../redux/action';
import ModalPhoto from './ModalPhoto';
import Comments from './Comments';

function Modal() {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.modal.comments);

  const [name, setName] = useState('');

  const [text, setText] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleComment = (e) => {
    setText(e.target.value);
  };
  const handleClickComment = (id, name, text) => {
    dispatch(loadComment(id, name, text));
    setName('');
    setText('');
  };

  useEffect(() => {
    dispatch(loadModal(id));
  }, [id]);
  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modalLeft">
          <div className="modalPhoto">
            <ModalPhoto key={id} />
          </div>
          <div className="inputName">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="inputComment">
            <input
              type="text"
              placeholder="Ваш комментарий"
              value={text}
              onChange={handleComment}
            />
          </div>
          <div className="button">
            <button
              className="commentBtn"
              onClick={() => handleClickComment(id, name, text)}
            >
              Оставить коментарий
            </button>
          </div>
        </div>
        <div className="modalRight">
          <div className="modalComment">
            {comments.map((comment) => {
              return <Comments key={id} comment={comment} />;
            })}
          </div>
          <Link to={'/'}>
            <div className="btn">×</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
