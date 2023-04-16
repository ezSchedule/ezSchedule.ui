import React, { useEffect } from 'react'
import './tablePayment.css'
import FinanceTr from '../FinanceTr'
import useFetch from '../../../hooks/UseFecth';
import { useState } from 'react';

const TablePayment = () => {
    const [payment, setPayment] = useState([]);

    useEffect(() => {
        useFetch.get().then((response) => {
            console.log(response.data);
            setPayment(response.data)
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <>
            <table>
                <tr className='title'>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Salão</th>
                    <th>Valor</th>
                </tr>
                {
                    payment.map((payment)=>(
                        <FinanceTr 
                        name={payment.name} 
                        date={payment.date} 
                        salon={payment.salon}
                        value={payment.value} />
                    ))
                }
            </table>
        </>
    )
}

export default TablePayment