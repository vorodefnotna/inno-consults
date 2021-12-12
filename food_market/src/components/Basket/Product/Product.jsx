import React from 'react';

import './Product.scss'

const Product = ({id, img, name, price}) => {
  return (
    <div className='basket-product'>
      <div className='basket-product_img'>
        <img src={img.src} alt={img.alt}/>
      </div>
      <div className="basket-product_name">
        {name}
      </div>
      <div className='basket-product_price'>
        {price}
      </div>
      <div className='basket-product_remove'/>
    </div>
  );
};

export default Product;