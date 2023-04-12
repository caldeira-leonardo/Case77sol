import { useEffect, useMemo, useState } from 'react'
import './ProposeComponent.scss'
import { InputValuesProps } from './ProposeType'
import Header from '../../elements/Header/Header'
import { billToNumberFormat, currency, esctructureTypes, zipCodeMask } from '../../../utils/utils'
import Input from '../../elements/Input/Input'
import Select from '../../elements/Select/Select'
import Button from '../../elements/Button/Button'

const ProposeComponent = (props: any) => {
    const { submit, respondeValues, errorMessage, loading } = props

    const [selectedStructureType, setSelectedStructureType] = useState<InputValuesProps>({
        id: '1',
        name: 'fibrocimento-madeira',
    })
    const [cepValue, setCepValue] = useState<string>('')
    const [electricityBillValue, setElectricityBillValue] = useState<string>('R$ ')
    const [wasCepFocused, setWasCepFocused] = useState(false)
    const [wasBillFocused, setWasBillFocused] = useState(false)

    const handleSelectStructureType = (item: string) => {
        setSelectedStructureType(esctructureTypes.filter((struc) => struc.id === item)[0])
    }

    const handleChangeCepValue = (value: string) => {
        if (value.length > 9) return
        setCepValue(value)
    }

    const handleSubmit = () => {
        const values = {
            selectedStructureType,
            cepValue,
            electricityBillValue: billToNumberFormat(electricityBillValue),
        }
        submit(values)
    }

    const cepError = useMemo(() => {
        return cepValue.length < 9
    }, [cepValue])

    const billerror = useMemo(() => {
        return billToNumberFormat(electricityBillValue) < 100
    }, [electricityBillValue])

    return (
        <div className="propose-wrapper">
            <Header title="Case criação de proposta" />
            <div className="form">
                <Input
                    error={wasCepFocused ? cepError : false}
                    onFocus={() => setWasCepFocused(true)}
                    label="CEP"
                    value={zipCodeMask(cepValue)}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) => handleChangeCepValue(item.target.value)}
                    errorMessage="Mínimo 8 caracteres"
                />

                <Input
                    error={wasBillFocused ? billerror : false}
                    onFocus={() => setWasBillFocused(true)}
                    label="Valor da conta de luz"
                    value={electricityBillValue}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                        setElectricityBillValue(String(currency(item.target.value)))
                    }
                    errorMessage="Valor mínimo de R$ 100,00"
                />

                <Select
                    className="select"
                    label="Tipo de estrutura de telhado"
                    name="select"
                    options={esctructureTypes}
                    onChange={(item: React.ChangeEvent<HTMLSelectElement>) =>
                        handleSelectStructureType(item.target.value)
                    }
                    selectedValue={selectedStructureType}
                />

                <Button
                    onClick={handleSubmit}
                    disabled={cepError || billerror || loading}
                    loading={loading}
                    className="confirmationButton"
                    label="Enviar proposta"
                />
            </div>
            <span>{errorMessage}</span>
        </div>
    )
}

export default ProposeComponent
