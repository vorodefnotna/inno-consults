import React, { useContext } from 'react';
import {AppContext}          from '../../App';

import Header from './Header';
import Card   from './Card';

import './Catalog.scss';

const Catalog = () => {
  const {data, isLoading, basketHandler, basket} = useContext(AppContext)

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
        basket={basket}
        showBasket={true}
      />
      <div className="catalog_list">
        {data.map( product => (
          <Card
            id={product.id}
            img={product.main_image}
            name={product.title}
            description={product.description}
            price={product.price}
            calories={product.calories}
            onClick={basketHandler}
          />
        ) )
        }
      </div>
    </div>
  );
};

export default Catalog;