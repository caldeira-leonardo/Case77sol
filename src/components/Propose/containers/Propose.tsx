import { ReactNode, useState } from 'react'
import ProposeComponent from '../components/ProposeComponent'
import { submitValuesProps } from '../components/ProposeType'
import api from '../../../services/api'

// const api = 'https://api2.77sol.com.br/busca-cep?estrutura=fibrocimento-metalico&valor_conta=2900&cep=06543-001'

const Propose = (props: any) => {
    const [respondeValues, setRespondeValues] = useState<any>(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const submit = (values: submitValuesProps) => {
        setLoading(true)
        api.get(
            `busca-cep?estrutura=${values.selectedStructureType.name}&valor_conta=${values.electricityBillValue}&cep=${values.cepValue}`
        )
            .then((res) => setRespondeValues(res))
            .catch((err) => {
                console.log(err)
                setErrorMessage(err.message)
            })
            .finally(() => setLoading(false))
    }

    return <ProposeComponent {...props} {...{ submit, respondeValues, errorMessage, loading }} />
}

export default Propose
