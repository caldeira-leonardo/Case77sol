import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Kit from './Kit';

const meta = {
    title: 'Components/Elements/Kit',
    component: Kit,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => {
    //         return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>;
    //     },
    // ],
} satisfies Meta<typeof Kit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        valueTotal: 20,
        valor: 10,
        url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35777/imagens/1618952203.png',
        titulo: 'Titulo',
        qtde: 20,
        id: '123',
        custo: 123,
    },
};
