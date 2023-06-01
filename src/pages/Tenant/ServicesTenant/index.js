import React from 'react'
import './servicesTenant.css'
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant'
import HeaderInternal from '../../../components/internal/Header';
import serviceFetch from '../../../hooks/serviceFetch';
import CardService from '../../../components/internal/CardService/CardService';
import { useState, useEffect } from 'react';
import defaultImage from '../../../components/assets/Perfil.png'

const ServicesTenant = () => {
    const [serviceList, setServiceList] = useState([]);
    
    const token = sessionStorage.TOKEN;
    const idCondominium = sessionStorage.CONDOMINIUM;

    useEffect(() => {
        serviceFetch.get(`?id=${idCondominium}`)
            .then((res) => {
                if (res.status === 204) {
                    setServiceList(0);
                    return;
                }
                setServiceList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className='main-services-tenant'>
                <SidebarTenant />
                <HeaderInternal text="Serviços" />
            </div>
            <div className='services-tenant'>
                <div className='main-service-list'>
                    {
                        serviceList ?
                            serviceList.map(
                                (service) => (
                                    <React.Fragment key={service.id}>
                                        <CardService
                                            idService={service.id}
                                            service={service.serviceName}
                                            nameTenant={service.tenant.name}
                                            imgTenant={service.tenant.nameBlobImage == null ? defaultImage : ("https://ezscheduleusersimages.blob.core.windows.net/ezschedules/" + service.tenant.nameBlobImage)}
                                            phoneTenant={service.tenant.phoneNumber}
                                            showImage={false} />
                                    </React.Fragment>
                                )
                            )
                            :
                            <div className='div-not-content'>
                                <p>Ainda não existe serviços cadastrados no seu condomínio!</p>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ServicesTenant;