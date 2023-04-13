import React, { useState, useEffect } from 'react';
import './Kit.scss';
import Input from '../Input/Input';
import { currency } from '../../../utils/utils';
import { kitProps } from './KitType';

const Kit = (props: kitProps) => {
    const { titulo, url, qtde, valor, valueTotal, custo, id } = props;
    console.log('props', props); //TODO remove logs
    return (
        <div className="kit-wrapper" key={id}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>{titulo}</h3>
                <img src={url} alt="produto" />
            </div>
            <div className="infos">
                <Input label="qtde" value={qtde} disabled />
                <Input label="valor" value={currency(valor?.toFixed(2))} disabled />
                <Input label="Valor Total" value={currency(valueTotal?.toFixed(2))} disabled />
                <Input label="custo" value={currency(custo?.toFixed(2))} disabled />
            </div>
        </div>
    );
};

export default Kit;
