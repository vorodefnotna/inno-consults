import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate }                   from 'react-router-dom';
import Layout                                        from './components/Layout';
import Auth                                          from './components/Auth';
import Catalog                                       from './components/Catalog';
import Basket                                        from './components/Basket';

import './style/app.scss';

export const AppContext = createContext( null );

function App () {
  const [data, setData] = useState( null );
  const [isAccess, setIsAccess] = useState( false );
  const [isLoading, setIsLoading] = useState( true );
  const [basket, setBasket] = useState( null );
  const [user, setUser] = useState( '' );

  useEffect( () => {
    getData();
  }, [] );

  useEffect( () => {
    if ( isAccess ) {
      getSavedData();
    }
  }, [isAccess] );

  const getData = () => fetch( 'https://erikkhasanov.github.io/inno-consults/api/food-market.json' )
  .then( res => res.json() )
  .then( res => setData( res.data ) )
  .catch( e => console.error( e ) )
  .finally( () => setIsLoading( false ) );

  const getSavedData = () => {
    const saved = JSON.parse( window.localStorage.getItem( `basketData_${user}` ) );
    if ( !saved ) return;
    setBasket( saved.basket );
  };

  const basketHandler = ( method, id ) => {
    let copyBasket = basket && [...basket] || [];
    if ( method === 'add' ) {
      const product = data.find( product => product.id === id );
      product.uid = new Date().getMilliseconds() + Math.random();
      copyBasket.push( data.find( product => product.id === id ) );
    } else if ( method === 'remove' ) {
      const arr = copyBasket.filter( product => product.uid !== id );
      copyBasket = arr;
    }
    setBasket( copyBasket );
  };

  const resetContext = () => {
    setIsAccess( false );
    setBasket( null );
    setUser( '' );
  };

  return (
    <AppContext.Provider value={{
      data,
      isLoading,
      isAccess,
      setIsAccess,
      basket,
      resetContext,
      basketHandler,
      getSavedData,
      user,
      setUser
    }}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={
            <Auth/>
          }/>
          {isAccess && (
            <Route path="/catalog" element={
              <Catalog/>
            }/>
          )}
          {isAccess && (
            <Route path="/basket" element={
              <Basket/>
            }/>
          )}
          <Route path="*" element={
            <Navigate to="/"/>
          }/>
        </Route>
      </Routes>
    </AppContext.Provider>
  )
    ;
};

export default App;
