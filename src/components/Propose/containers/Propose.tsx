import { ReactNode } from 'react'
import ProposeComponent from '../components/ProposeComponent'
import { submitValuesProps } from '../components/ProposeType'

const Propose = (props: any) => {
    const submit = (values: submitValuesProps) => {
        console.log('values', values) //TODO remove logs
    }

    return <ProposeComponent {...props} {...{ submit }} />
}

export default Propose
