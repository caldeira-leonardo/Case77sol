import React, { useState, useEffect } from 'react';
import './ProposeData.scss';
import Input from '../elements/Input/Input';
import Parcelamento from '../elements/Parcelamento/Parcelamento';
import Kit from '../elements/Kit/Kit';
import { currency } from '../../utils/utils';
import { kitProps } from '../elements/Kit/KitType';
import { ParcelamentoProps } from '../elements/Parcelamento/ParcelamentoType';
import { ProposeDataProps } from './ProposeDataType';

const ProposeData = ({
    irradiancia,
    irradiancia_minima,
    irradiancia_maxima,
    integradores_regiao,
    integradores_minimo,
    integradores_maximo,
    economia,
    potencial,
    valor_instalacao,
    parcelamento,
    kit,
}: ProposeDataProps) => {
    return (
        <div className="proposeData-wrapper">
            <div className="infos">
                <Input label="Irradiancia" value={irradiancia} disabled />
                <Input label="Irradiancia Mínima" value={irradiancia_minima} disabled />
                <Input label="Irradiancia Máxima" value={irradiancia_maxima} disabled />
                <Input label="Integradores Regiao" value={integradores_regiao} disabled />
                <Input label="Integradores Mínimo" value={integradores_minimo} disabled />
                <Input label="Integradores Maximo" value={integradores_maximo} disabled />
                <Input label="Economia" value={currency(economia.toFixed(2))} disabled />
                <Input label="Potencial" value={potencial} disabled />
                <Input label="Valor Instalacao" value={currency(valor_instalacao.toFixed(2))} disabled />
            </div>
            <h2>Parcelamento</h2>
            <div className="parcelamento">
                {parcelamento.map((parce: ParcelamentoProps, index: number) => (
                    <Parcelamento {...{ ...parce }} key={index} />
                ))}
            </div>
            <h2>Itens a serem instalados</h2>
            <div className="propose-kit">
                {kit.map((kit: kitProps) => (
                    <Kit {...{ ...kit }} key={kit.id} />
                ))}
            </div>
        </div>
    );
};

export default ProposeData;
