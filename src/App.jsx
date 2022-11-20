import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PersistLogin from './components/auth/PersistLogin';
import RequireAuth from './components/auth/RequireAuth';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/Login';
import Register from './components/Register';
import Unauthorized from './components/auth/Unauthorized';

import Dashboard from './components/dashboard/Dashboard';
import Settings from './components/dashboard/Settings';
import Friends from './components/dashboard/Friends';
import DirectMessages from './components/dashboard/DirectMessages';
import Servers from './components/dashboard/Servers';
import FourOFour from './components/auth/404';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<PersistLogin />}>

                <Route element={<MainLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Route>

                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='unauthorized' element={<Unauthorized />} />

                <Route
                    element={<><RequireAuth /><DashboardLayout /></>}
                >
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/@me' element={<Settings />} />
                    <Route path='/dashboard/friends' element={<Friends />} />
                    <Route path='/dashboard/messages' element={<DirectMessages />} />
                    <Route path='/dashboard/servers' element={<Servers />} />
                </Route>

                <Route path='*' element={<FourOFour />} />
                
            </Route>
        </Routes>
    );
}
