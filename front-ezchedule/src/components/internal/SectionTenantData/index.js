import React from 'react'
import './sectionTenantData.css'
import ImageUserDefault from '../../assets/Perfil.png';

const SectionTenantData = ({ img, id, name, apartment, block, insertId }) => {
  return (
    <>
      <section onClick={() => { insertId(id) }}>
        <div>
          <img src={img != "" ? img : ImageUserDefault} />
          <span>
            {name}
          </span>
        </div>
        <p>
          {apartment} bloco {block}
        </p>
      </section>
    </>
  )
}

export default SectionTenantData