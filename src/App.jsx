import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PersistLogin from './components/PersistLogin';
import RequireAuth from './components/RequireAuth';

import Home from './routes/Home';
import Users from './routes/Users';
import Messages from './routes/Messages';
import About from './routes/About';

import Login from './routes/Login';
import Register from './routes/Register';
import Unauthorized from './routes/Unauthorized';

import MyAccount from './routes/MyAccount';
import FourOFour from './routes/404';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<PersistLogin />}>

                <Route element={<MainLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='placeholder' element={<Users />} />
                    <Route path='placeholder' element={<Messages />} />
                    <Route path='about' element={<About />} />
                </Route>

                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='unauthorized' element={<Unauthorized />} />

                <Route
                    element={<><RequireAuth /><DashboardLayout /></>}
                >
                    <Route path='/dashboard/@me' element={<MyAccount />} />
                    <Route path='/dashboard/:friendId' element={<MyAccount />} />
                </Route>

                <Route path='*' element={<FourOFour />} />
                
            </Route>
        </Routes>
    );
}
