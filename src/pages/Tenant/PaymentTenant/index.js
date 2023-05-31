import React from 'react'
import './paymentTenant.css'
import HeaderInternal from '../../../components/internal/Header'
import ScheduleBox from '../../../components/internal/ScheduledBox'
import ScheduleBoxAdd from '../../../components/internal/ScheduleBoxAdd'
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant'
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
                        <ScheduleBox />
                        <ScheduleBoxAdd />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentTenant