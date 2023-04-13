import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../components/elements/Header/Header';

describe('App', () => {
    test('Should be able to render the Header on the screen', () => {
        const { getByText } = render(<Header title="Case 77sol" />);

        expect(getByText('Case 77sol')).toBeInTheDocument();
    });
});
