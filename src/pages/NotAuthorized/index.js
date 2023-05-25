import React from 'react'
import './notAutorized.css'
import Sad from '../../components/assets/triste.png';
import { Link } from 'react-router-dom';

const NotAutorized = () => {
    return (
        <>
            <div className='mainNotAutorized'>
                <img src={Sad} />
                <h1>401</h1>
                <p>Você não esta autorizado para esta ação</p>
                <Link to='/login'>
                    <button>Ir ao Login</button>
                </Link>
            </div>
        </>
    )
}

export default NotAutorized