import React, { useState, useEffect } from "react";
import "./modal.css";
import Close from "../assets/fechar.png";
import ImageUserDefault from "../assets/Perfil.png"
import SectionTenantData from "../../components/internal/SectionTenantData";

const Modal = ({ isOpen, children, setModalOpen, title, tenantList }) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredTenants, setFilteredTenants] = useState([]);

    useEffect(() => {
        setFilteredTenants(tenantList);
    }, [tenantList]);

    const handleSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        const filtered = tenantList.filter(
            (tenant) => tenant.name.toLowerCase().includes(searchInput)
        );
        setFilteredTenants(filtered);
        setSearchValue(searchInput);
    };

    if (isOpen) {
        return (
            <div className="bg-modal">
                <div className="card-modal">
                    <div className="header-modal">
                        <h2>{title}</h2>
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Buscar..."
                            value={searchValue}
                            onChange={handleSearch}
                        />
                        <img onClick={setModalOpen} src={Close} alt="Close" />
                    </div>
                    <div className="body-modal">
                        {filteredTenants.length === 0 ? (
                            <div className="div-not-content">
                                <p>Nenhum condomínio encontrado.</p>
                            </div>
                        ) : (
                            <div className="container-list-tenant">
                                {filteredTenants.map((tenant) => (
                                    <SectionTenantData
                                        key={tenant.id}
                                        img={
                                            tenant.nameBlobImage == null
                                                ? ImageUserDefault
                                                : "https://ezscheduleusersimages.blob.core.windows.net/ezschedules/" +
                                                tenant.nameBlobImage
                                        }
                                        id={tenant.id}
                                        name={tenant.name}
                                        apartment={tenant.apartmentNumber}
                                        block={tenant.residentsBlock}
                                        insertId={() => { }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default Modal;
