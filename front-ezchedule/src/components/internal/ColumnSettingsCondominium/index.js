import React, { useEffect, useState } from 'react'
import './columnSettingsCondominium.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/predio_perfil.png"
import condominiumFetch from "../../../hooks/condominiumFetch"

const ColumnSettingsCondominium = () => {
  const [tenantQuantity, setTenantQuantity] = useState();
  const [apartmentQuantity, setApartmentQuantity] = useState();
  const [saloonQuantity, setSaloonQuantity] = useState();
  const token = sessionStorage.TOKEN;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const id = sessionStorage.CONDOMINIUM;

  useEffect(() => {
    condominiumFetch.get(`/settings?id=${id}`, config)
    .then((res) => {
      setTenantQuantity(res.data.amountTenants);
      setApartmentQuantity(res.data.amountApartments);
      setSaloonQuantity(res.data.amountSaloons);
    }).catch((err) => {
      console.log(err);
    });
  });

  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Moradores" information={tenantQuantity} editable={true} />
          <InputInformation attribute="Apartamentos" information={apartmentQuantity} editable={true}/>
          <InputInformation attribute="Salões" information={saloonQuantity} editable={true}/>
        </div>
        <div className='settingsImg'>
          <img src={ImgPerfil} />
        </div>
      </div>
    </>
  )
}

export default ColumnSettingsCondominium;