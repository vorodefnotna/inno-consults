import React  from 'react';
import {Link} from 'react-router-dom';

import {getSum} from '../../../../helpers/helpers';

import './Cart.scss'

const cartIcon = require('../../../../img/cart-icon.png')

const Cart = ({basket}) => {

  const count = basket ? basket.length : '0'

  return (
    <Link to='/basket'>
      <div className='cart'>
        <div className='cart_desc'>
          <span>{count} товара</span>
          <span>на сумму {getSum(basket)} руб</span>
        </div>
        <img src={cartIcon.default} alt="cart"/>
      </div>
    </Link>
  );
};

export default Cart;