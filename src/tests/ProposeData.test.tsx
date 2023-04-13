import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ProposeDataProps } from '../components/ProposeData/ProposeDataType';
import { kitMockData } from './Kit.test';
import { parcelaMockData } from './Parcelamento.test';
import ProposeData from '../components/ProposeData/ProposeData';

describe('App', () => {
    const mockData: ProposeDataProps = {
        economia: 101112,
        integradores_maximo: 652,
        integradores_minimo: 1,
        integradores_regiao: 33,
        irradiancia: 5354,
        irradiancia_maxima: 5734,
        irradiancia_minima: 4634,
        potencial: 'MARAVILHOSO',
        valor_instalacao: 21403.525183496695,
        kit: [kitMockData],
        parcelamento: [parcelaMockData],
    };

    test('Should be able to render the Kit on the screen', () => {
        const { getByText } = render(<ProposeData {...{ ...mockData }} />);

        expect(getByText('Irradiancia')).toBeInTheDocument();
        expect(getByText('Irradiancia Mínima')).toBeInTheDocument();
        expect(getByText('Irradiancia Máxima')).toBeInTheDocument();
        expect(getByText('Integradores Regiao')).toBeInTheDocument();
        expect(getByText('Integradores Mínimo')).toBeInTheDocument();
        expect(getByText('Integradores Maximo')).toBeInTheDocument();
        expect(getByText('Economia')).toBeInTheDocument();
        expect(getByText('Potencial')).toBeInTheDocument();
        expect(getByText('Valor Instalacao')).toBeInTheDocument();
        expect(getByText('Parcelamento')).toBeInTheDocument();
        expect(getByText('Itens a serem instalados')).toBeInTheDocument();
    });

    // test('Should be able to render the Kit on the screen with an error', () => {
    //     const { container } = render(<Kit label="test label" error />);

    //     const errorExist = container.innerHTML.includes('onError');

    //     expect(errorExist).toBe(true);
    // });

    // test('Should be able to render the Kit on the screen with an error message', () => {
    //     const { getByTestId } = render(<Kit label="test label" errormessage="Mensagem de error" error />);

    //     expect(getByTestId('error-message')).toBeInTheDocument();
    // });

    // test('Should be able to render the Kit disabled', () => {
    //     const { getByTestId } = render(<Kit label="test label" disabled />);

    //     expect(getByTestId('Kit')).toBeDisabled();
    // });

    // test('Should be able to render the Kit disabled', () => {
    //     const { getByTestId } = render(<Kit label="test label" value="teste valor" />);

    //     expect(getByTestId('Kit')).toHaveValue();
    // });
});
