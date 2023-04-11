import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Calendar from './pages/Administrator/Calendar/index';
import Graphic from './pages/Administrator/Graphic';
import SendEmail from './pages/recoverPassword/SendEmail';
import SecurityCode from './pages/recoverPassword/SecurityCode';
import UpdatePassword from './pages/recoverPassword/UpdatePassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/homeAdm' element={<Calendar />} />
          <Route path='/graphicAdm' element={<Graphic />} />
          <Route path='/sendEmail' element={<SendEmail />} />
          <Route path='/securityCode' element={<SecurityCode />} />
          <Route path='/updatePassword' element={<UpdatePassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
