import React, { useEffect } from 'react'
import './ServiceList.css'
import Modal from '../../../components/Modal';
import { useState } from 'react';
import SectionTenantData from '../SectionTenantData';
import CardService from '../CardService/CardService';
import serviceFetch from '../../../hooks/serviceFetch';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';
import defaultImage from '../../assets/Perfil.png';
import importFile from '../../assets/import.png';
import sendFile from '../../assets/send.png';

const ServiceList = () => {
    const idCondominium = sessionStorage.CONDOMINIUM;
    const token = sessionStorage.TOKEN;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const [openModal, setOpenModal] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    const [tenantList, setTenantList] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState();

    const [serviceName, setServiceName] = useState();
    const [idTenant, setIdTenant] = useState();
    const [idService, setIdService] = useState();

    useEffect(() => {
        serviceFetch.get(`/condominium/${idCondominium}`, config)
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

        serviceFetch.get(`/tenant?id=${idCondominium}`, config)
            .then((res) => {
                setTenantList(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    function registerService() {
        const service = {
            serviceName: serviceName,
            tenant: { id: idTenant }
        };

        serviceFetch.post(``, service, config)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Serviço adicionada com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteService(id) {
        serviceFetch.delete(`?id=${id}`, config)
            .then(() => {
                setServiceList(serviceList.filter(service => service.id !== id));
            })
            .catch(() => {
                alert("Algo deu errado!");
            });
    }

    function validateInput() {
        if (serviceName == undefined || serviceName == "")
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Preencha o nome do serviço!',
                showConfirmButton: false,
                timer: 1500
            });
        else if (idTenant == undefined)
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Selecione um inquilino!',
                showConfirmButton: false,
                timer: 1500
            });
        else registerService();
    }

    function exportTxt() {
        window.location.href = `http://localhost:8080/users/export-txt/${sessionStorage.CONDOMINIUM}`;
    }

    function importTxt() {
        const fd = new FormData();
        fd.append('file', file, fileName);

        userFetch.post(`/import-txt`, fd, config)
            .then(() => {
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className='main-service-list'>
                <div className='div-add-service' onClick={() => setOpenModal(!openModal)}>
                    +
                </div>

                <div id='import-export' className='div-add-service'>
                    <div id='export' className='div-txt'>
                        <button onClick={() => exportTxt()}>Export</button>
                    </div>

                    <form id='import' className='div-txt' onClick={() => document.querySelector(".input-file").click()}>
                        {
                            file == null ?
                                <>
                                    <img className='import-image' title='Arquivo TXT' src={importFile} />
                                    <p>Clique para inserir o arquivo .txt</p>
                                </>
                                :
                                <>
                                    <img className='send-txt' title='Send' src={sendFile} onClick={() => importTxt()} />
                                    <p>{fileName}</p>
                                </>
                        }
                        <input type='file' className='input-file' onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name)
                            if (files) setFile(files[0]);
                        }} hidden />
                    </form>
                </div>

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
                                        deleteFunction={deleteService}
                                        showImage={true} />
                                </React.Fragment>
                            )
                        )
                        :
                        <div className='div-not-content'>
                            <p>Ainda não existe serviços cadastrados no seu condomínio!</p>
                        </div>
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
                                        img={tenant.nameBlobImage == null ? defaultImage : ("https://ezscheduleusersimages.blob.core.windows.net/ezschedules/" + tenant.nameBlobImage)}
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