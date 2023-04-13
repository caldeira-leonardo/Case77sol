import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ParcelamentoProps } from '../components/elements/Parcelamento/ParcelamentoType';
import Parcelamento from '../components/elements/Parcelamento/Parcelamento';

describe('App', () => {
    test('Should be able to render the Kit on the screen', () => {
        const { getByText, getByTestId } = render(<Parcelamento {...{ ...parcelaMockData }} />);

        expect(getByText('parcelas')).toBeInTheDocument();
        expect(getByText('Taxa Maxima')).toBeInTheDocument();
        expect(getByText('Taxa Minina')).toBeInTheDocument();
        expect(getByText('Valor Maximo')).toBeInTheDocument();
        expect(getByText('Valor Minimo')).toBeInTheDocument();
        expect(getByTestId('parcelamento')).toHaveAttribute('class', 'parcelamento-wrapper');
    });
});

export const parcelaMockData: ParcelamentoProps = {
    parcelas: 60,
    taxa_maxima: 3.5,
    taxa_minina: 1.08,
    valor_maximo: 858.0378159989606,
    valor_minimo: 486.55781709114916,
};
