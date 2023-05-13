import React from "react";
import "./cardService.css"
import Delete from '../../assets/delete-icon.png'

const CardService = ({idService, service, nameTenant, imgTenant, phoneTenant, deleteFunction }) => {
    return (
        <>
            <div className='div-informations-tenant'>
                <div className='img-tenant'>
                    <img src={imgTenant} alt="" />
                </div>
                <div className='text-infos'>
                    <h4 className="service-tenant">{service}</h4>
                    <p className="name-tenant">{nameTenant}</p>
                    <p className="phone-tenant">{phoneTenant}</p>
                </div>
                <img src={Delete} className="delete" onClick={() => deleteFunction(idService)} />
            </div>
        </>
    );
}

export default CardService;