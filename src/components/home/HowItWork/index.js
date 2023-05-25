import React from 'react';
import './howItWorks.css';
import Calendario from '../../assets/calendario.png';
import Moeda from '../../assets/moeda.png';
import Notificacao from '../../assets/notificacao.png';

const HowItWorks = () => {
  return (
    <div className='mainDivHowItsWorks'>
      <div className="howItsWork">
        <h1>Como Funciona?</h1>
        <div className="imagensDiv">
          <div className="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Calendario} alt="" />
            </div>
            <p>Agende seus eventos pela nossa aplicação web! Isso pode facilitar seu dia e aumentar as interações dentro do seu condominío.</p>
          </div>

          <div className="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Moeda} alt="" />
            </div>
            <p>Encontre serviços que os seus vizinhos oferecem e quite diretamente no app.</p>
          </div>

          <div className="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Notificacao} alt="" />
            </div>
            <p>Receba notificações de pagamentos e eventos, através do fórum compartilhado.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks