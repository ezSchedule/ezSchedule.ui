import React from 'react'
import './advertisingBanner.css'
import calendarAnimate from '../../assets/calendar-animate.svg'

import { Link } from 'react-router-dom'
import Seta from '../../assets/seta.png'

const AdvertisingBanner = () => {
    return (
        <div className='mainAdvertisingBanner'>
            <div className='advertisingBanner'>
                <div className='textAdvertising'>
                    <h1>
                        A um passo da <span>organização!</span>
                    </h1>
                    <p>
                        Problemas para organizar sua festa?<br/>
                        Podemos te ajudar com isso,<br/> apresentamos para você o Schedule!
                    </p>
                    
                    <div className='btnDiv'>
                        <Link to={'/registerPart1'} className='btn'>
                            Cadastro
                        </Link>
                    </div>
                </div>
                <div className='imgAdvertising'>
                    <div>
                        <img src={calendarAnimate} alt="Imagem de um homem, segurando um lápis gigante editando um calendário" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisingBanner