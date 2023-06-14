import React from 'react'
import './notFound.css'
import Sad from '../../components/assets/triste.png';
import VLibras from '../../components/internal/Vlibras';

const NotFound = () => {
  return (
    <>
      <VLibras />
      <div className='mainNotFound'>
        <img src={Sad}/>
        <h1>Algo deu errado!</h1>
        <p>Parece que não encontramos a página que você está procurando</p>
        <button>Voltar</button>
      </div>  
    </>
  )
}

export default NotFound