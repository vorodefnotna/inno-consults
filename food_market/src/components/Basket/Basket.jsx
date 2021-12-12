import React, {useEffect, useState} from 'react';

import Header  from '../Catalog/Header';
import Product from './Product';
import Footer  from './Footer';

import './Basket.scss'

const Basket = () => {
  const [isLoading, setIsLoading] = useState( true );
  const [products, setProducts] = useState( null );

  useEffect( () => {
    fetch( 'https://erikkhasanov.github.io/inno-consults/api/food-market.json' )
    .then( res => res.json() )
    .then( res => setProducts( res.data ) )
    .catch( e => console.error( e ) )
    .finally( () => setIsLoading( false ) );
  }, [] );

  if(isLoading) return (
    <div>
      Загрузка...
    </div>
  )

  return (
    <div className='basket'>
      <Header
        className='basket_header'
        title='Корзина с выбранными товарами'
      />
      <div className='basket_list'>
        {products.map(product => (
          <Product
            id={product.id}
            img={product.main_image}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
      <Footer price={'3200 руб'}/>
    </div>
  );
};

export default Basket;