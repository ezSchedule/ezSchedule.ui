import React from 'react'
import './scheduleTenant.css'
import HeaderInternal from '../../../components/internal/Header'
import ScheduleBox from '../../../components/internal/ScheduledBox'
import ScheduleBoxAdd from '../../../components/internal/ScheduleBoxAdd'
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant'
const ScheduleTenant = () => {
    return (
        <>
            <div className='mainScheduleTenant'>
                <SidebarTenant />
                <HeaderInternal text="Datas Agendadas" />
            </div>
            <div className='ScheduleTenant'>
                <div className='ScheduleTenantScroll'>
                    <div className='ScheduleTenantScrollBoxes'>
                        <ScheduleBoxAdd />
                        <ScheduleBox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleTenant