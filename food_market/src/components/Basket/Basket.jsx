import React, {useContext} from 'react';
import { AppContext }      from '../../App';
import {useNavigate}       from 'react-router-dom';

import {getSum} from '../../helpers/helpers';

import Header  from '../Catalog/Header';
import Product from './Product';
import Footer  from './Footer';

import './Basket.scss'

const Basket = () => {
  const {basket, isLoading, basketHandler, user, resetContext} = useContext(AppContext)
  const navigate = useNavigate()

  const orderBuy = () => {
    const data = {
      user: user,
      basket: basket,
      price: `${getSum(basket)} руб`
    }
    saveData(data)
    console.log(data);
    resetContext()
    navigate('/')
  }

  const saveData = (data) => {
    window.localStorage.setItem(`basketData_${user}`, JSON.stringify(data))
  }

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
        {basket?.map(product => (
          <Product
            id={product.uid}
            img={product.main_image}
            name={product.title}
            price={product.price}
            remove={basketHandler}
          />
        ))}
      </div>
      <Footer
        price={`${getSum(basket)} руб`}
        onClick={orderBuy}
      />
    </div>
  );
};

export default Basket;