import React           from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import './layout.scss'

const Layout = () => {
  const {pathname} = useLocation()

  return (
    <div className={`market ${['/'].includes(pathname) ? 'market_authorization' : ''}`}>
      <div className='market_layout'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;