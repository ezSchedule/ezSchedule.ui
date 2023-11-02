import React from 'react'
import './paymentRequests.css'
import Sidebar from '../../../components/internal/SideBar'
import HeaderInternal from '../../../components/internal/Header'
import TableRequestPayment from '../../../components/internal/TableRequestPayment'
import { Link } from 'react-router-dom';
const PaymentRequests = () => {
    return (
        <>
            <div className='main-payment-requests'>
                <Sidebar />
                <HeaderInternal text="Solicitações" />
            </div>
            <div className="payment-requests">
                <div>
                    <TableRequestPayment />
                </div>
                <span className='btn-div'>
                    <Link to="/paymentAdm">
                        <button className='btn-requests'>
                            Agendados
                        </button>
                    </Link>
                </span>

            </div>
            
        </>
    )
}

export default PaymentRequests