import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Button from '../components/elements/Button/Button';

describe('App', () => {
    test('Should be able to render the button', () => {
        const { getByText } = render(<Button label="Botão test" />);

        expect(getByText('Botão test')).toBeInTheDocument();
    });

    test('Should be able to render the loading on the button', () => {
        const { getByTestId } = render(<Button label="Botão test" loading />);

        expect(getByTestId('loading')).toBeInTheDocument();
    });

    test('Should be able to render the button disabled', () => {
        const { getByTestId } = render(<Button label="Botão test" disabled />);

        expect(getByTestId('button')).toBeDisabled();
    });
});
