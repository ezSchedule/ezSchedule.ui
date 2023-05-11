import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPart1 from './pages/register/RegisterPart1';
import RegisterPart2 from './pages/register/RegisterPart2';
import RegisterPart3 from './pages/register/RegisterPart3';
import NotFound from './pages/NotFound';
import Calendar from './pages/Administrator/Calendar/index';
import Graphic from './pages/Administrator/Graphic';
import SendEmail from './pages/recoverPassword/SendEmail';
import SecurityCode from './pages/recoverPassword/SecurityCode';
import UpdatePassword from './pages/recoverPassword/UpdatePassword';
import Service from './pages/Administrator/Service/Index';
import Payment from './pages/Administrator/Payment';
import Forum from './pages/Administrator/Forum';
import Configuration from './pages/Administrator/Configuration';
import PersonalSettings from './pages/Administrator/SettingsPerson';
import CondominiumSettings from './pages/Administrator/SettingsCondominium';
import NewService from './pages/Administrator/NewService';

const RoutesSystem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registerPart1' element={<RegisterPart1 />} />
                <Route path='/registerPart2' element={<RegisterPart2 />} />
                <Route path='/registerPart3' element={<RegisterPart3 />} />
                <Route path='/homeAdm' element={<Calendar />} />
                <Route path='/graphicAdm' element={<Graphic />} />
                <Route path='/sendEmail' element={<SendEmail />} />
                <Route path='/securityCode' element={<SecurityCode />} />
                <Route path='/updatePassword' element={<UpdatePassword />} />
                <Route path='/servicesAdm' element={<Service />} />
                <Route path='/newService' element={<NewService />} />
                <Route path='/paymentAdm' element={<Payment />} />
                <Route path='/forumAdm' element={<Forum />} />
                <Route path='/configurationAdm' element={<Configuration />} />
                <Route path='/personSettingsAdm' element={<PersonalSettings />} />
                <Route path='/condominiumSettings' element={<CondominiumSettings />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesSystem