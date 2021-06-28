import React from 'react';
function Comments(props) {

  return (
    <div>
      <div className='com'>
        {props.comment.date}
      </div>
      <div className='com'>
        <div className='com'>
          Ваше Имя: {props.comment.name}
        </div>
      </div>
      <div>
        <div className='com'>
          Комментарий: {props.comment.text}
        </div>
      </div>
    </div>
  );
}

export default Comments;