import React from 'react'
import './sectionUserInformation.css'
import SectionTenantData from '../../internal/SectionTenantData/index'

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
            <form>
                <input type="text" placeholder='Nome do serviço prestado' name="serviceName"/>
                <button type='submit'>Cadastrar</button>
            </form>
        </>
    )
}

export default SectionUserInformation