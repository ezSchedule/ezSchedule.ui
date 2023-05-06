import React from 'react'
import './sectionUserInformation.css'
import SectionTenantData from '../../SectionTenantData'

const SectionUserInformation = () => {
    return (
        <>
            <div className='mainSectionUserInformation'>
                <SectionTenantData />
                <SectionTenantData />
                <SectionTenantData />
                <SectionTenantData />
                <SectionTenantData />
                <SectionTenantData />
            </div>
        </>
    )
}

export default SectionUserInformation