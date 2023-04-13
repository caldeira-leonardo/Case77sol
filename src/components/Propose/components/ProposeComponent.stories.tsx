import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProposeComponent from './ProposeComponent';

const meta = {
    title: 'Components/Propose',
    component: ProposeComponent,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => {
    //         return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>;
    //     },
    // ],
} satisfies Meta<typeof ProposeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        submit: () => ({
            selectedStructureType: { id: '2', name: 'fibrocimento-metalico' },
            cepValue: '19020-800',
            electricityBillValue: 123.52,
        }),
        responseValues: null,
        loading: false,
        errormessage: '',
    },
};
