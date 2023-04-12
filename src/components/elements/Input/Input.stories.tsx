import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
    title: 'Components/Elements/Input',
    component: Input,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'teste1',
        label: 'Input',
        error: false,
        errormessage: '',
    },
};

export const Error: Story = {
    args: {
        value: 'teste2',
        label: 'Input',
        error: true,
        errormessage: '',
    },
};

export const ErrorWithMessage: Story = {
    args: {
        value: 'teste3',
        label: 'Input',
        error: true,
        errormessage: 'Mensagem de erro',
    },
};
