import React from 'react'
import './columnSettingsCondominium.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/predio_perfil.png"

const columnSettingsCondominium = (props) => {
  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Moradores" information="236"/>
          <InputInformation attribute="Apartamentos" information="40"/>
          <InputInformation attribute="Salões" information="5"/>
        </div>
        <div className='settingsImg'>
          <img src={ImgPerfil} />
        </div>
      </div>
      <div className='settingsButtons'>
        <button id='cancel'>Cancelar</button>
        <button>Salvar</button>
      </div>
    </>
  )
}

export default columnSettingsCondominium;