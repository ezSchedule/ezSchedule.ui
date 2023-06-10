import React from 'react';
import './configuration.css';
import Sidebar from '../../../components/internal/SideBar';
import { Link } from 'react-router-dom';
import condominiumFetch from '../../../hooks/condominiumFetch';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';

const Configuration = () => {
    const token = sessionStorage.TOKEN;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    function generateToken() {
        condominiumFetch.get(`/generate-token/${sessionStorage.CONDOMINIUM}`, config)
            .then((res) => {
                Swal.fire(`${res.data}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function exportCSV() {
        userFetch.get(`/generate-csv/${sessionStorage.CONDOMINIUM}/desc`, config)
            .then((res) => {
                window.open(res.request.responseURL);
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
                        <button className='button' onClick={() => exportCSV()}>Exportar .csv</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Configuration