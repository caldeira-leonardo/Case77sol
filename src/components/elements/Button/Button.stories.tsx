import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
    title: 'Components/Elements/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Button',
    },
}

export const Loading: Story = {
    args: {
        label: 'loading',
        loading: true,
    },
}
