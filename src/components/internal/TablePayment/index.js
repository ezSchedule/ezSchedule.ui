import React, { useEffect } from 'react'
import './tablePayment.css'
import FinanceTr from '../FinanceTr'
import { useState } from 'react';
import reportFetch from '../../../hooks/reportFetch';

const TablePayment = (props) => {
    const token = sessionStorage.TOKEN;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const [payment, setPayment] = useState([]);

    useEffect(() => {
        reportFetch.get(`/condominium?id=${sessionStorage.CONDOMINIUM}`, config)
            .then((res) => {
                setPayment(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <table>
                <tr className='title'>
                    <th>Nome</th>
                    <th>Data do pagamento</th>
                    <th>Salão</th>
                    <th>Valor</th>
                </tr>
                {
                    payment.map(
                        (payment) => (
                            <React.Fragment key={payment.id}>
                                <FinanceTr
                                    onClick={() => { props.modalEdit(true);  props.modalInformation(payment)}}
                                    name={payment.tenantName}
                                    date={payment.paymentTime == null ? "Não pago" : payment.paymentTime}
                                    salon={payment.saloonName}
                                    value={"R$ " + payment.saloonPrice} />
                            </React.Fragment>
                        )
                    )
                }
            </table>
        </>
    )
}

export default TablePayment;