import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Input from '../components/elements/Input/Input';

describe('App', () => {
    test('Should be able to render the Input on the screen', () => {
        const { getByText } = render(<Input label="test label" />);

        expect(getByText('test label')).toBeInTheDocument();
    });

    test('Should be able to render the Input on the screen with an error', () => {
        const { container } = render(<Input label="test label" error />);

        const errorExist = container.innerHTML.includes('onError');

        expect(errorExist).toBe(true);
    });

    test('Should be able to render the Input on the screen with an error message', () => {
        const { getByTestId } = render(<Input label="test label" errormessage="Mensagem de error" error />);

        expect(getByTestId('error-message')).toBeInTheDocument();
    });

    test('Should be able to render the input disabled', () => {
        const { getByTestId } = render(<Input label="test label" disabled />);

        expect(getByTestId('input')).toBeDisabled();
    });

    test('Should be able to render the input disabled', () => {
        const { getByTestId } = render(<Input label="test label" value="teste valor" />);

        expect(getByTestId('input')).toHaveValue();
    });
});
