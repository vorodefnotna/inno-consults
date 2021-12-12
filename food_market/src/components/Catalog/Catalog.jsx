import React, { useEffect, useState } from 'react';

import Header from './Header';
import Card   from './Card';

import './Catalog.scss';

const Catalog = () => {
  const [isLoading, setIsLoading] = useState( true );
  const [products, setProducts] = useState( null );

  useEffect( () => {
    fetch( 'https://erikkhasanov.github.io/inno-consults/api/food-market.json' )
    .then( res => res.json() )
    .then( res => setProducts( res.data ) )
    .catch( e => console.error( e ) )
    .finally( () => setIsLoading( false ) );
  }, [] );

  if ( isLoading ) {
    return (
      <div>
        Загрузка...
      </div>
    );
  }

  return (
    <div className="catalog">
      <Header
        className={'catalog_header'}
        title="Наша продукция"
        cart={{
          count: 3,
          price: 3200
        }}
      />
      <div className="catalog_list">
        {products.map( product => (
          <Card
            id={product.id}
            img={product.main_image}
            name={product.title}
            description={product.description}
            price={product.price}
            calories={product.calories}
          />
        ) )
        }
      </div>
    </div>
  );
};

export default Catalog;