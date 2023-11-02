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
    const [openModal, setOpenModal] = useState(false);
    const [serviceList, setServiceList] = useState([]);
    const [tenantList, setTenantList] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState();

    const [serviceName, setServiceName] = useState();
    const [idTenant, setIdTenant] = useState();
    const [idService, setIdService] = useState();
    const token = sessionStorage.TOKEN;
    const idCondominium = sessionStorage.CONDOMINIUM;

    useEffect(() => {
        serviceFetch.get(`/condominium/${idCondominium}`)
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

        serviceFetch.get(`/tenant?id=${idCondominium}`)
            .then((res) => {
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
            tenant: { id: idTenant }
        };

        serviceFetch.post(``, service)
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
        serviceFetch.delete(`?id=${id}`)
            .then(() => {
                setServiceList(serviceList.filter(service => service.id !== id));
            })
            .catch(() => {
                alert("Went wrong!");
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
        userFetch.get(`/export-txt/${sessionStorage.CONDOMINIUM}`, { responseType: 'blob' })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'services.txt');
                document.body.appendChild(link);
                link.click();
            })
            .catch((err) => console.log(err));
    }

    function importTxt() {
        const fd = new FormData();
        fd.append('file', file, fileName);

        userFetch.post(`/import-txt`, fd)
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


            <span className='btn-div'>
                <button className='btn-options-service' onClick={() => setOpenModal(!openModal)}>
                    Adicionar serviços+
                </button>

                <button className='btn-options-service' id='export' onClick={() => exportTxt()}>
                    Exportar serviços
                </button>

                <button className='btn-options-service' id='insert-file-button'  onClick={() => document.querySelector(".input-file").click()}>
                    {
                            file == null ?
                                <>

                                    <p className='text-button'>Inserir a partir de .txt</p>
                                </>
                                :
                                <>
                                    <p>{fileName}</p>
                                    <img className='send-txt' title='Send' src={sendFile} onClick={() => importTxt()} />
                                </>
                        }
                        <input type='file' className='input-file' onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name)
                            if (files) setFile(files[0]);
                        }} hidden />
                </button>

            </span>
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