import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route, PrivateRoute }                  from 'react-router-dom';
import Layout                             from './components/Layout';
import Auth                               from './components/Auth';
import Catalog                            from './components/Catalog';
import Basket                             from './components/Basket';

import './style/app.scss';

export const AppContext = createContext( null );

function App () {
  const [data, setData] = useState( null );
  const [isAccess, setIsAccess] = useState(false)
  const [isLoading, setIsLoading] = useState( true );
  const [basket, setBasket] = useState( null);
  const [user, setUser] = useState('')

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if(isAccess) {
      getSavedData()
    }
  }, [isAccess])

  const getData = () => fetch( 'https://erikkhasanov.github.io/inno-consults/api/food-market.json' )
  .then( res => res.json() )
  .then( res => setData( res.data ) )
  .catch( e => console.error( e ) )
  .finally( () => setIsLoading( false ) );

  const getSavedData = () => {
    const saved = JSON.parse(window.localStorage.getItem(`basketData_${user}`))
    if(!saved) return
    setBasket(saved.basket)
  }

  const basketHandler = (method, id) => {
    let copyBasket = basket && [...basket] || []
    if(method === 'add') {
      const product = data.find(product => product.id === id)
      product.uid = new Date().getMilliseconds() + Math.random()
      copyBasket.push(data.find(product => product.id === id))
    } else if (method === 'remove') {
      const arr = copyBasket.filter(product => product.uid !== id)
      copyBasket = arr
    }
    setBasket(copyBasket)
  }

  const resetContext = () => {
    setIsAccess(false)
    setBasket(null)
    setUser('')
  }

  return (
    <Layout>
      <Routes>
        <Route index element={
          <AppContext.Provider value={{
            setUser,
            setIsAccess
          }}>
            <Auth/>
          </AppContext.Provider>
        }/>
        { isAccess && (
          <Route path="/catalog" element={
            <AppContext.Provider value={{
              data,
              isLoading,
              basket,
              basketHandler
            }}>
              <Catalog/>
            </AppContext.Provider>
          }/>
        )}
        {isAccess && (
          <Route path="/basket" element={
            <AppContext.Provider value={{
              basket,
              isLoading,
              basketHandler,
              user,
              resetContext
            }}>
              <Basket/>
            </AppContext.Provider>
          }/>
        )}
        <Route path='*' element={
          <AppContext.Provider value={{
            setUser,
            setIsAccess
          }}>
            <Auth/>
          </AppContext.Provider>
        }/>
      </Routes>
    </Layout>
  );
};

export default App;
