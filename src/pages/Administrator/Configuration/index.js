import React from 'react';
import './configuration.css';
import Sidebar from '../../../components/internal/SideBar';
import { Link } from 'react-router-dom';
import condominiumFetch from '../../../hooks/condominiumFetch';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';

const Configuration = () => {
    function generateToken() {
        condominiumFetch.get(`/generate-token/${sessionStorage.CONDOMINIUM}`)
            .then((res) => Swal.fire(`${res.data}`))
            .catch((err) => console.log(err));
    }

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    function exportCSV() {
        userFetch.get(`/generate-csv/${sessionStorage.CONDOMINIUM}/desc`)
            .then((res) => {
                var blob = new Blob([res.data], {
                    type: res.headers["content-type"],
                });
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = `tenant.csv`;
                link.click();
            })
            .catch((err) => console.log(err));
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
                        <Link className='button' to="/condominiumSettings">Condomínio</Link>
                        <button className='button' onClick={() => generateToken()}>Gerar token</button>
                        <button className='button' onClick={() => exportCSV()}>Exportar .csv</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Configuration