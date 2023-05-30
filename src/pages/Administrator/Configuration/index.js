import React from 'react';
import './configuration.css';
import Sidebar from '../../../components/internal/SideBar';
import { Link } from 'react-router-dom';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';

const Configuration = () => {
    function generateToken() {
        userFetch.get(`/generate-token/${sessionStorage.CONDOMINIUM}`)
        .then((res) => {
            Swal.fire(`${res.data}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <div className='mainConfiguraton'>
                <Sidebar />
            </div>
            <div className='configurationInside'>
                <div>
                    <h5> O que deseja ajustar?</h5>
                    <div className='btnConfig'>
                        <Link className='button' to="/personSettingsAdm">Meu perfil</Link>
                        <Link className='button' to="/condominiumSettings">Condominío</Link>
                        <button className='button' onClick={() => generateToken()}>Gerar token</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Configuration