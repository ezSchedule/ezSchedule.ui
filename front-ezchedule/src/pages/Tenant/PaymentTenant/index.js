import React from 'react'
import './paymentTenant.css'
import SidebarTenant from '../../../components/internal/SidebarTenant/Index'
import HeaderInternal from '../../../components/internal/Header'
import ScheduleBox from '../../../components/internal/ScheduledBox'
import ScheduleBoxAdd from '../../../components/internal/ScheduleBoxAdd'
const PaymentTenant = () => {
    return (
        <>
            <div className='mainPaymentTenant'>
                <SidebarTenant />
                <HeaderInternal text="Datas Agendadas" />
            </div>
            <div className='paymentTenant'>
                <div className='paymentTenantScroll'>
                    <div className='paymentTenantScrollBoxes'>
                        <ScheduleBoxAdd />
                        <ScheduleBox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentTenant