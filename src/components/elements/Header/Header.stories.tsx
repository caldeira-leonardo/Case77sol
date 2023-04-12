import { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta = {
    title: 'Components/Elements/Header',
    component: Header,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Header',
    },
}
