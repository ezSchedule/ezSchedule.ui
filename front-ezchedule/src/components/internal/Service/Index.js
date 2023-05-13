import React, { useEffect } from 'react'
import './ServiceList.css'
import Modal from '../../../components/Modal';
import { useState } from 'react';
import SectionTenantData from '../SectionTenantData';
import CardService from '../CardService/CardService';
import serviceFetch from '../../../hooks/serviceFetch';

const ServiceList = () => {
    const [openModal, setOpenModal] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    const [tenantList, setTenantList] = useState([]);

    const [serviceName, setServiceName] = useState();
    const [idTenant, setIdTenant] = useState();
    const [idService, setIdService] = useState();
    const token = sessionStorage.TOKEN;
    const idCondominium = sessionStorage.CONDOMINIUM;

    useEffect(() => {
        serviceFetch.get(`?id=${idCondominium}`)
            .then((res) => {
                setServiceList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        serviceFetch.get(`/tenant?id=${idCondominium}`)
            .then((res) => {
                console.log(res.data)
                setTenantList(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    function registerService() {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const service = {
            serviceName: serviceName,
            tenant: { idUser: idTenant }
        };

        serviceFetch.post(``, service)
            .then(() => {
                alert("Successfully registered!");
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteService(id) {
        serviceFetch.delete(`?id=${id}`)
            .then(() => {
                setServiceList(serviceList.filter(service => service.id !== id));
            })
            .catch(() => {
                alert("Went wrong!");
            });
    }

    function validateInput() {
        if (serviceName == undefined || serviceName == "") alert("Fill in the service name!");
        else if (idTenant == undefined) alert("Select a tenant!");
        else registerService();
    }

    return (
        <>
            <div className='main-service-list'>
                <div className='div-add-service' onClick={() => setOpenModal(!openModal)}>
                    +
                </div>
                {
                    serviceList.map(
                        (service) => (
                            <React.Fragment key={service.id}>
                                <CardService
                                    idService={service.id}
                                    service={service.serviceName}
                                    nameTenant={service.tenant.name}
                                    imgTenant=""
                                    phoneTenant={service.tenant.phoneNumber}
                                    deleteFunction={deleteService} />
                            </React.Fragment>
                        )
                    )
                }
            </div>
            <Modal title="Adicionar serviço" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <div className='container-list-tenant'>
                    {
                        tenantList.map(
                            (tenant) => (
                                <React.Fragment key={tenant.id}>
                                    <SectionTenantData
                                        insertId={setIdTenant}
                                        img=""
                                        id={tenant.id}
                                        name={tenant.name}
                                        apartment={tenant.apartmentNumber}
                                        block={tenant.residentsBlock} />
                                </React.Fragment>
                            )
                        )
                    }
                </div>
                <div className='container-inputs'>
                    <input
                        className='input-service'
                        placeholder='Nome do serviço prestado'
                        onChange={(e) => setServiceName(e.target.value)} />
                    <button className='button-register' onClick={validateInput}>Cadastrar</button>
                </div>
            </Modal>
        </>
    )
}

export default ServiceList