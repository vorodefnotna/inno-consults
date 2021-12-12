import React from 'react';

import './Card.scss'

const Card = ({id, img, name, description, price, calories, onClick}) => {
  return (
    <div className='card' key={id}>
      <div className='card_img'>
        <img src={img.src} alt={img.alt}/>
      </div>
      <div className='card_product'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className='card_footer'>
        <div className='card_price'>
          <h4>{price}</h4>
        </div>
        <div className='card_calories'>
          <p>{calories}</p>
        </div>
        <div className='card_button' onClick={() => onClick('add', id)}>
          +
        </div>
      </div>
    </div>
  );
};

export default Card;