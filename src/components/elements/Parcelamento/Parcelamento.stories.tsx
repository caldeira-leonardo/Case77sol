import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Parcelamento from './Parcelamento';

const meta = {
    title: 'Components/Elements/Parcelamento',
    component: Parcelamento,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => {
    //         return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>;
    //     },
    // ],
} satisfies Meta<typeof Parcelamento>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        valor_minimo: 20,
        valor_maximo: 100,
        taxa_minina: 2,
        taxa_maxima: 5,
        parcelas: 1,
    },
};
