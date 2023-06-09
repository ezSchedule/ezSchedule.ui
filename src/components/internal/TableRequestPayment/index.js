import React, { useState, useEffect } from 'react';
import './tableRequestPayment.css';
import aceptImg from "../../assets/acept.png";
import rejectImg from "../../assets/cancel.png";
import noPaymentFetch from '../../../hooks/noPaymentFetch';

const TableRequestPayment = () => {
    const [payments, setPayments] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        setId(sessionStorage.ID);
    }, []);

    useEffect(() => {
        if (id) {
            noPaymentFetch.get(`/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setPayments(response.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [id]);

    return (
        <>
            <table>
                <thead>
                    <tr className='title'>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr className="dataTable" key={payment.id}>
                            <td>{payment.scheduleDTO.nameEvent}</td>
                            <td>{payment.scheduleDTO.dateEvent}</td>
                            <td>R$ 90</td>
                            <td className='imgs-acept-or-reject'>
                                <img className='img-reject' src={rejectImg} alt="deafult description" />
                                <img className='img-acept' src={aceptImg} alt="deafult description" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableRequestPayment;
