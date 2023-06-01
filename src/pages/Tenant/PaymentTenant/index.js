import React from "react";
import "./paymentTenant.css";
import SidebarTenant from "../../../components/internal/SidebarTenant/SidebarTenant";
import HeaderInternal from '../../../components/internal/Header';
import TablePayment from '../../../components/internal/TablePayment';
import Modal from '../../../components/Modal';
import { useState } from 'react';
import Label from '../../../components/Labels';

const PaymentTenant = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalInformation, setModalInformation] = useState({});

    return (
        <>
            <div className='main-payment'>
                <SidebarTenant />
                <HeaderInternal text="Pagamentos Realizados" />
            </div>
            <div className='payment'>
                <div>
                    <TablePayment
                        modalEdit={setOpenModal}
                        modalInformation={setModalInformation}
                    />
                </div>
            </div>
            <Modal title="Detalhes do pedido" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <div className='container-model-column'>
                    <div className='column-model-left'>
                        <Label label="Nome do morador: " text={modalInformation.tenantName} />
                        <Label label="Bloco do morador: " text={modalInformation.tenantBlock} />
                        <Label label="Apartamento: " text={modalInformation.tenantNumber} />
                        <Label label="Telefone: " text={modalInformation.tenantPhone} />
                    </div>
                    <div className='column-model-right'>
                        <Label label="Categoria: " text={modalInformation.category} />
                        <Label label="Bloco do evento: " text={modalInformation.saloonBlock} />
                        <Label label="Data do evento: " text={modalInformation.dateEvent} />
                    </div>
                </div>
                <div className='container-model-row'>
                    <Label label="Status:" text={modalInformation.paymentStatus} />
                    <Label label="Valor total:" text={"R$ " + modalInformation.saloonPrice} />
                </div>
            </Modal>
        </>
    );
}

export default PaymentTenant;