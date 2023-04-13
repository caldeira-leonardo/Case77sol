import React, { useState, useEffect } from 'react';
import './Parcelamento.scss';
import Input from '../Input/Input';
import { currency } from '../../../utils/utils';

const Parcelamento = (props: any) => {
    const { parcelamento } = props;

    console.log('parcelamento', parcelamento); //TODO remove logs

    return (
        <div className="parcelamento-wrapper">
            <Input label="parcelas" value={parcelamento.parcelas} disabled />
            <Input label="Taxa Maxima" value={parcelamento.taxa_maxima} disabled />
            <Input label="Taxa Minina" value={parcelamento.taxa_minina} disabled />
            <Input label="Valor Maximo" value={currency(parcelamento.valor_maximo.toFixed(2))} disabled />
            <Input label="Valor Minimo" value={currency(parcelamento.valor_minimo.toFixed(2))} disabled />
        </div>
    );
};

export default Parcelamento;
