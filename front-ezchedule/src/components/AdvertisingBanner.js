import React from 'react'
import './AdvertisingBanner.css'
import imgBanner from '../assets/bannerImg.png'

const AdvertisingBanner = () => {
  return (
    <div className='mainAdvertisingBanner'>
        <div className='advertisingBanner'>
        <div className='textAdvertising'>
            <h1>
                A um passo da <span>organização!</span>
            </h1>
            <p>Problemas para organizar sua festa? Podemoste ajudar com isso, apresentamos para você o Schedule!</p>
            <button>
                Cadastro
            </button>
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