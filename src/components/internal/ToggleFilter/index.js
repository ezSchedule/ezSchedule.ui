import React, { useState } from "react";
import './toggleFilter.css';
import postFetch from "../../../hooks/postFetch";

const ToggleFilter = ({ isOpen, setPosts, setOpen }) => {
    const token = sessionStorage.TOKEN;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [selectedOption, setSelectedOption] = useState('');

    function all(){
        window.location.reload(false);

    }

    function communicate() {
        postFetch.get(`/type/Comunicado`, config)
        .then((res) => {
            setSelectedOption('Comunicado');
            setPosts(res.data)
        });
    }

    function urgent(){
        postFetch.get(`/type/Urgente`, config)
        .then((res) => {
            setSelectedOption('Urgente');
            setPosts(res.data)
        });

    }

    function votation(){
        postFetch.get(`/type/Votação`, config)
        .then((res) => {
            setSelectedOption('Votação');
            setPosts(res.data)
        });

    }

    if (isOpen) {
        return (
            <div className="filterTog">
                <span onClick={() => all()}>Listar todos</span>
                <span onClick={() => communicate()}>Comunicado</span>
                <span onClick={() => urgent()}>Urgente</span>
                <span onClick={() => votation()}>Votação</span>               
            </div>
        );
    }
    return false;
}

export default ToggleFilter;