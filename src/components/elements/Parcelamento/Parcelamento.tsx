import React, { useState, useEffect } from 'react';
import './Parcelamento.scss';
import Input from '../Input/Input';
import { currency } from '../../../utils/utils';
import { ParcelamentoProps } from './ParcelamentoType';

const Parcelamento = ({ valor_minimo, valor_maximo, taxa_minina, taxa_maxima, parcelas }: ParcelamentoProps) => {
    return (
        <div className="parcelamento-wrapper" data-testid="parcelamento">
            <Input label="parcelas" value={parcelas} disabled />
            <Input label="Taxa Maxima" value={taxa_maxima} disabled />
            <Input label="Taxa Minina" value={taxa_minina} disabled />
            <Input label="Valor Maximo" value={currency(valor_maximo.toFixed(2))} disabled />
            <Input label="Valor Minimo" value={currency(valor_minimo.toFixed(2))} disabled />
        </div>
    );
};

export default Parcelamento;
