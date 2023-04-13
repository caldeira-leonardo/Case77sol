import React, { useState, useEffect } from 'react';
import './ProposeData.scss';
import Input from '../elements/Input/Input';
import Parcelamento from '../elements/Parcelamento/Parcelamento';
import Kit from '../elements/Kit/Kit';
import { currency } from '../../utils/utils';
import { kitProps } from '../elements/Kit/KitType';
import { ParcelamentoProps } from '../elements/Parcelamento/ParcelamentoType';

const ProposeData = (props: any) => {
    const { responseValues } = props;

    return (
        <div className="proposeData-wrapper">
            <div className="infos">
                <Input label="Irradiancia" value={responseValues.irradiancia} disabled />
                <Input label="Irradiancia Mínima" value={responseValues.irradiancia_minima} disabled />
                <Input label="Irradiancia Máxima" value={responseValues.irradiancia_maxima} disabled />
                <Input label="Integradores Regiao" value={responseValues.integradores_regiao} disabled />
                <Input label="Integradores Mínimo" value={responseValues.integradores_minimo} disabled />
                <Input label="Integradores Maximo" value={responseValues.integradores_maximo} disabled />
                <Input label="Economia" value={currency(responseValues.economia.toFixed(2))} disabled />
                <Input label="Potencial" value={responseValues.potencial} disabled />
                <Input label="Valor Instalacao" value={currency(responseValues.valor_instalacao.toFixed(2))} disabled />
            </div>
            <h2>Parcelamento</h2>
            <div className="parcelamento">
                {responseValues.parcelamento.map((parcelamento: ParcelamentoProps, i: string) => (
                    <Parcelamento {...{ ...parcelamento }} key={i} />
                ))}
            </div>
            <h2>Itens a serem instalados</h2>
            <div className="propose-kit">
                {responseValues.kit.map((kit: kitProps) => (
                    <Kit {...{ ...kit }} key={kit.id} />
                ))}
            </div>
        </div>
    );
};

export default ProposeData;
