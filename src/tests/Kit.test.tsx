import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Kit from '../components/elements/Kit/Kit';
import { kitProps } from '../components/elements/Kit/KitType';

describe('App', () => {
    test('Should be able to render the Kit on the screen', () => {
        const { getByText } = render(<Kit {...{ ...kitMockData }} />);

        expect(getByText('qtde')).toBeInTheDocument();
        expect(getByText('valor')).toBeInTheDocument();
        expect(getByText('Valor Total')).toBeInTheDocument();
        expect(getByText('custo')).toBeInTheDocument();
    });

    test('Should be able to render the Kit on the screen with style', () => {
        const { getByTestId } = render(<Kit {...{ ...kitMockData }} />);

        expect(getByTestId('kit-wrapper')).toHaveAttribute('class', 'kit-wrapper');
    });
});

export const kitMockData: kitProps = {
    custo: 761.93,
    id: 58706,
    qtde: 9,
    titulo: 'Módulo solar',
    url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/58706_16756990891962324934.png',
    valor: 1566.91,
    valueTotal: 14102.19,
};
