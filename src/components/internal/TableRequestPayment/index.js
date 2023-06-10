import React, { useState, useEffect } from 'react';
import './tableRequestPayment.css';
import aceptImg from "../../assets/acept.png";
import rejectImg from "../../assets/cancel.png";
import noPaymentFetch from '../../../hooks/reportFetch';
import acceptPaymentFetch from '../../../hooks/reportFetch';
import rejectPaymentFetch from '../../../hooks/scheduleFetch'
const TableRequestPayment = () => {
    const [payments, setPayments] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        setId(sessionStorage.CONDOMINIUM);
    }, []);

    useEffect(() => {
        if (id) {
            noPaymentFetch.get(`/condominium/no-payment/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setPayments(response.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [id]);

    function acceptSolicitationPayment(id) {
        if (id) {
            const date = new Date().toISOString()
            acceptPaymentFetch.put(`/${id}/Pago/${date}`)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            window.location.reload();
        }
    }

    function rejectSolicitationPayment(id) {
        if (id) {
            rejectPaymentFetch.delete(`/delete/${id}`)
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            window.location.reload();
        }
    }

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
                                <img
                                    className='img-reject'
                                    src={rejectImg}
                                    onClick={() => rejectSolicitationPayment(payment.scheduleDTO.id)}
                                    alt="deafult description" />
                                <img
                                    className='img-acept'
                                    src={aceptImg}
                                    onClick={() => acceptSolicitationPayment(payment.id)}
                                    alt="deafult description" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableRequestPayment;
