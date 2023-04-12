import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
    title: 'Components/Elements/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Button',
    },
};

export const Loading: Story = {
    args: {
        label: 'loading',
        loading: true,
    },
};
