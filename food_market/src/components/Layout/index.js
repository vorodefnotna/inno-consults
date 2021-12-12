import React from 'react';

import './layout.scss'

const Layout = ({children}) => {
  return (
    <div className='market'>
      <div className='market_layout'>
        {children}
      </div>
    </div>
  );
};

export default Layout;