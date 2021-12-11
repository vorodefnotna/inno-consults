import {Routes, Route} from "react-router-dom";

import UsersList from "./pages/UsersList/UsersList";
import User      from './pages/User/User';

import './style/App.css';

const App = () => (
    <Routes>
        <Route path={'users'} element={<UsersList/>} />
        <Route path={`users/:userId`} element={<User/>} />
    </Routes>
)

export default App;
