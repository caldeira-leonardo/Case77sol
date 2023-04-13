import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
    title: 'Components/Elements/Select',
    component: Select,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => {
    //         return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>;
    //     },
    // ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Select',
        onChange: () => console.log('Olá'),
        options: [
            {
                name: 'teste1',
                id: 'teste1',
            },
            {
                name: 'teste2',
                id: 'teste2',
            },
        ],
        name: 'Select',
    },
};
