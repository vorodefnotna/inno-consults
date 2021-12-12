import React from 'react';

import './Cart.scss'

const cartIcon = require('../../../../img/cart-icon.png')

const Cart = ({count, price}) => {
  return (
    <div className='cart'>
      <div className='cart_desc'>
        <span>{count} товара</span>
        <span>на сумму {price} руб</span>
      </div>
      <img src={cartIcon.default} alt="cart"/>
    </div>
  );
};

export default Cart;