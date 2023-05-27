import React, { useState } from 'react'
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
import NotAutorized from './pages/NotAuthorized';
import PaymentTenant from './pages/Tenant/PaymentTenant';
import ConfigTenant from './pages/Tenant/ConfigTenant';
import ServicesTenant from './pages/Tenant/ServicesTenant';

const Private = ({ Item }) => {
    const signed = sessionStorage.AUTH;

    return signed ? <Item /> : <NotAutorized />;
}

const RoutesSystem = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Screen routes */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registerPart1' element={<RegisterPart1 />} />
                <Route path='/registerPart2' element={<RegisterPart2 />} />
                <Route path='/registerPart3' element={<RegisterPart3 />} />
                <Route path='/sendEmail' element={<SendEmail />} />
                <Route path='/securityCode' element={<SecurityCode />} />
                <Route path='/updatePassword' element={<UpdatePassword />} />

                {/* Syndicate routes */}
                <Route path="/homeAdm" element={<Private Item={Calendar} />} />
                <Route path='/graphicAdm' element={<Private Item={Graphic} />} />
                <Route path='/servicesAdm' element={<Private Item={Service} />} />
                <Route path='/paymentAdm' element={<Private Item={Payment} />} />
                <Route path='/forumAdm' element={<Private Item={Forum} />} />
                <Route path='/configurationAdm' element={<Private Item={Configuration} />} />
                <Route path='/personSettingsAdm' element={<Private Item={PersonalSettings} />} />
                <Route path='/condominiumSettings' element={<Private Item={CondominiumSettings} />} />

                {/* Tenant routes */}
                <Route path='/paymentTenant' element={<Private Item={PaymentTenant} />} />
                <Route path='/servicesTenant' element={<Private Item={ServicesTenant} />} />
                <Route path='/configurationTenant' element={<Private Item={ConfigTenant} />} />

                {/* Error screens */}
                <Route path='/notAutorized' element={<NotAutorized />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesSystem