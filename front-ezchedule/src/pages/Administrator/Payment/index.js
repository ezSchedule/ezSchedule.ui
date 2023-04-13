import React from 'react'
import './payment.css';
import Sidebar from '../../../components/internal/SideBar/index';
import HeaderInternal from '../../../components/internal/Header';
import TablePayment from '../../../components/internal/TablePayment';



const Payment = () => {
    return (
        <>
            <div className='mainPayment'>
                <Sidebar />
                <HeaderInternal text="Pagamentos Realizados" />
            </div>
            <div className='payment'>
                <div>
                <TablePayment />
                </div>
            </div>
        </>
    )
}

export default Payment;