import { Meta, StoryObj } from '@storybook/react'
import Loading from './Loading'

const meta = {
    title: 'Components/Elements/Loading',
    component: Loading,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>
        },
    ],
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
