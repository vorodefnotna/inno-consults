import { Routes, Route } from 'react-router-dom';

import Layout  from './components/Layout';
import Auth    from './components/Auth';
import Catalog from './components/Catalog';
import Basket  from './components/Basket';

import './style/app.scss';

function App () {
  return (
    <Layout>
      <Routes>
        <Route index element={<Auth/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
