import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('App', () => {
    test('Should be able to render the component on the screen', () => {
        const { getByText } = render(<App />);

        expect(getByText('Case criação de proposta')).toBeInTheDocument();
        expect(getByText('CEP')).toBeInTheDocument();
        expect(getByText('Valor da conta de luz')).toBeInTheDocument();
        expect(getByText('Tipo de estrutura de telhado')).toBeInTheDocument();
        expect(getByText('Enviar proposta')).toBeInTheDocument();
    });
});
