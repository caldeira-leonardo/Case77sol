import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
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

    test('Should be able to click in the button', () => {
        const handleClick = vi.fn();

        const { getByTestId } = render(<Button label="Botão test" onClick={handleClick} />);
        fireEvent.click(getByTestId('button'));

        expect(handleClick).toHaveBeenCalledOnce();
    });
});
