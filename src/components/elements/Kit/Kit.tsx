import React, { useState, useEffect } from 'react';
import './Kit.scss';
import Input from '../Input/Input';
import { currency } from '../../../utils/utils';

const Kit = (props: any) => {
    const { kit } = props;

    return (
        <div className="kit-wrapper" key={kit.id}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>{kit.titulo}</h3>
                <img src={kit.url} alt="produto" />
            </div>
            <div className="infos">
                <Input label="qtde" value={kit.qtde} disabled />
                <Input label="valor" value={currency(kit.valor.toFixed(2))} disabled />
                <Input label="Valor Total" value={currency(kit.valueTotal.toFixed(2))} disabled />
                <Input label="custo" value={currency(kit.custo.toFixed(2))} disabled />
            </div>
        </div>
    );
};

export default Kit;
