import React, { useEffect, useState } from 'react';
import "./ServiceList.css"
import Swal from 'sweetalert2';
import Modal from '../../../components/Modal';
import SectionTenantData from '../SectionTenantData';
import CardService from '../CardService/CardService';
import serviceFetch from '../../../hooks/serviceFetch';
import userFetch from '../../../hooks/userFetch';
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
    const token = sessionStorage.TOKEN;
    const idCondominium = sessionStorage.CONDOMINIUM;
    const [searchValue, setSearchValue] = useState('');
    const [filteredTenants, setFilteredTenants] = useState([]);

    useEffect(() => {
        serviceFetch
            .get(`/condominium/${idCondominium}`)
            .then((res) => {
                if (res.status === 204) {
                    setServiceList([]);
                    return;
                }
                setServiceList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        serviceFetch
            .get(`/tenant?id=${idCondominium}`)
            .then((res) => {
                setTenantList(res.data);
                setFilteredTenants(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function registerService() {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const service = {
            serviceName: serviceName,
            tenant: { id: idTenant },
        };

        serviceFetch
            .post(``, service)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Serviço adicionado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteService(id) {
        serviceFetch
            .delete(`?id=${id}`)
            .then(() => {
                setServiceList((prevList) => prevList.filter((service) => service.id !== id));
            })
            .catch(() => {
                alert('Something went wrong!');
            });
    }

    function validateInput() {
        if (serviceName === undefined || serviceName === '') {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Preencha o nome do serviço!',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (idTenant === undefined) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Selecione um inquilino!',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            registerService();
        }
    }

    function exportTxt() {
        userFetch
            .get(`/export-txt/${sessionStorage.CONDOMINIUM}`, { responseType: 'blob' })
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

        userFetch
            .post(`/import-txt`, fd)
            .then(() => {
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const filtered = tenantList.filter((tenant) =>
            tenant.name.toLowerCase().includes(searchInput)
        );
        setFilteredTenants(filtered);
        setSearchValue(searchInput);
    };

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

                    <form
                        id='import'
                        className='div-txt'
                        onClick={() => document.querySelector('.input-file').click()}
                    >
                        {file === null ? (
                            <>
                                <img className='import-image' title='Arquivo TXT' src={importFile} />
                                <p>Clique para inserir o arquivo .txt</p>
                            </>
                        ) : (
                            <>
                                <img
                                    className='send-txt'
                                    title='Send'
                                    src={sendFile}
                                    onClick={() => importTxt()}
                                />
                                <p>{fileName}</p>
                            </>
                        )}
                        <input
                            type='file'
                            className='input-file'
                            onChange={({ target: { files } }) => {
                                files[0] && setFileName(files[0].name);
                                if (files) setFile(files[0]);
                            }}
                            hidden
                        />
                    </form>
                </div>

                {serviceList && serviceList.length > 0 ? (
                    serviceList.map((service) => (
                        <CardService
                            key={service.id}
                            idService={service.id}
                            service={service.serviceName}
                            nameTenant={service.tenant.name}
                            imgTenant={
                                service.tenant.nameBlobImage == null
                                    ? defaultImage
                                    : `https://ezscheduleusersimages.blob.core.windows.net/ezschedules/${service.tenant.nameBlobImage}`
                            }
                            phoneTenant={service.tenant.phoneNumber}
                            deleteFunction={deleteService}
                            showImage={true}
                        />
                    ))
                ) : (
                    <div className='div-not-content'>
                        <p>Ainda não existem serviços cadastrados no seu condomínio!</p>
                    </div>
                )}
            </div>
            <Modal title='Adicionar serviço' isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} tenantList={tenantList}>
                <div className='container-list-tenant'>
                    {filteredTenants.length === 0 ? (
                        <div className='div-not-content'>
                            <p>Nenhum condomínio foi encontrado.</p>
                        </div>
                    ) : (
                        <>
                            <input
                                className='input-search'
                                type='text'
                                placeholder='Buscar...'
                                value={searchValue}
                                onChange={handleSearch}
                            />
                            <ul className='list-tenants'>
                                {filteredTenants.map((tenant) => (
                                    <SectionTenantData
                                        key={tenant.id}
                                        tenant={tenant}
                                        setServiceName={setServiceName}
                                        setIdTenant={setIdTenant}
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                <div className='button-container'>
                    <button className='button' onClick={() => validateInput()}>
                        Adicionar serviço
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default ServiceList;
