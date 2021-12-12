import React from 'react';

import Button from '../../ui/Button';

const Footer = ({price, onClick}) => {
  return (
    <div className='basket_footer'>
      <h2>Заказ на сумму: <span>{price}</span></h2>
      <Button label='Оформить заказ'/>
    </div>
  );
};

export default Footer;