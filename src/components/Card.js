import React from 'react';
import { useSelector } from 'react-redux';
import Photo from './Photo';

function Card(props) {
  const cards = useSelector((state) => state.cards.items);
  const loading = useSelector((state) => state.cards.loading);

  if (loading) {
    return <div className="loading">loading photo...</div>;
  }

  return (
    <div className="card">
      {cards.map((card) => {
        return <Photo key={card.id} card={card} />;
      })}
    </div>
  );
}

export default Card;
