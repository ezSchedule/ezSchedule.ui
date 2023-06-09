import React from 'react'
import './paymentRequests.css'
import Sidebar from '../../../components/internal/SideBar'
import HeaderInternal from '../../../components/internal/Header'
import TableRequestPayment from '../../../components/internal/TableRequestPayment'
const PaymentRequests = () => {
    return (
        <>
            <div className='main-payment-requests'>
                <Sidebar />
                <HeaderInternal text="Solicitações de Pagamento" />
            </div>
            <div className="payment-requests">
                <div>
                    <TableRequestPayment />
                </div>
            </div>
        </>
    )
}

export default PaymentRequests