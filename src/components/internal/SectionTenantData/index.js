import React, { useState } from 'react';
import './sectionTenantData.css';
import ImageUserDefault from '../../assets/Perfil.png';

const SectionTenantData = ({ img, id, name, apartment, block, insertId }) => {
  const [backgroundColor, setBackgroundColor] = useState('#E9E9E9');
  const [cont, setCont] = useState(0);

  function handleClick() {
    if (cont === 0) {
      setCont(1);
      setBackgroundColor('#B6B6B7');
      insertId(id);
    } else {
      setCont(0);
      setBackgroundColor('#E9E9E9');
    }
  }

  return (
    <>
      <section tabIndex="0" onClick={handleClick} style={{ backgroundColor: backgroundColor }}>
        <div>
          <img src={img !== "" ? img : ImageUserDefault} alt="User" />
          <span>{name}</span>
        </div>
        <p>
          {apartment} bloco {block}
        </p>
      </section>
    </>
  );
};

export default SectionTenantData;
