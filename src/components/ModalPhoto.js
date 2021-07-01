import React from 'react';
import { useSelector } from 'react-redux';

function ModalPhoto(props) {
  const modal = useSelector((state) => state.modal.items);
  const loading = useSelector((state) => state.modal.loading);

  if (loading) {
    return <div className="loading">loading...</div>;
  }
  return (
    <div>
      <img src={modal.url} alt="" />
    </div>
  );
}

export default ModalPhoto;
