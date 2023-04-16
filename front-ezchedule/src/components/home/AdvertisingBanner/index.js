import React from 'react'
import './advertisingBanner.css'
import imgBanner from '../../assets/bannerImg.png'

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
                    <p>Problemas para organizar sua festa? Podemos te ajudar com isso, apresentamos para você o Schedule!</p>
                    <div className='btnDiv'>
                        <Link to={'/registerPart1'} className='btn'>
                            Cadastro
                        </Link>
                    </div>
                </div>
                <div className='imgAdvertising'>
                    <div>
                        <img src={imgBanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisingBanner