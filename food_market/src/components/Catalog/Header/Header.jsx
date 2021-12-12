import React from 'react';

import Cart from './Cart';

const Header = ({className, title, basket, showBasket = false}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {showBasket && <Cart basket={basket}/>}
    </div>
  );
};

export default Header;