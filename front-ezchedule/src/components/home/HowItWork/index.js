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
        <div class="imagensDiv">
          <div class="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Calendario} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>

          <div class="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Moeda} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>

          <div className="imagensDivItem">
            <div className='iconsDiv'>
              <img src={Notificacao} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks