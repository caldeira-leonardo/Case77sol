import { useEffect, useMemo, useState } from 'react'
import './ProposeComponent.scss'
import Input from '../../elements/Input/containers/Input'
import { InputValuesProps } from './ProposeType'
import SelectComponent from '../../elements/Select/components/SelectComponent'
import Button from '../../elements/Button/containers/Button'
import Header from '../../elements/Header/Header'

const ProposeComponent = (props: any) => {
    const { submit } = props

    const [selectedStructureType, setSelectedStructureType] = useState<InputValuesProps>({
        id: '1',
        name: 'fibrocimento-madeira',
    })
    const [cepValue, setCepValue] = useState<string>('')
    const [electricityBillValue, setElectricityBillValue] = useState<string>('R$ ')

    const esctructureTypes: Array<InputValuesProps> = [
        { id: '1', name: 'fibrocimento-madeira' },
        { id: '2', name: 'fibrocimento-metalico' },
        { id: '3', name: 'ceramico' },
        { id: '4', name: 'metalico' },
        { id: '5', name: 'laje' },
        { id: '6', name: 'solo' },
    ]

    const handleSelectStructureType = (item: string) => {
        setSelectedStructureType(esctructureTypes.filter((struc) => struc.id === item)[0])
    }

    const handleChangeCepValue = (value: string) => {
        if (value.length > 9) return
        setCepValue(value)
    }

    const zipCodeMask = (value: string) => {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
        return value
    }

    const handleSubmit = () => {
        const values = {
            selectedStructureType,
            cepValue,
            electricityBillValue,
        }
        submit(values)
    }

    const currency = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        value = value.replace(/\D/g, '')
        value = value.replace(/(\d)(\d{2})$/, '$1,$2')
        value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

        return `R$ ${value}`
    }

    const cepError = useMemo(() => {
        return cepValue.length < 9
    }, [cepValue])

    const billerror = useMemo(() => {
        return Number(electricityBillValue.replace('R$ ', '').replace('.', '').replace(',', '.')) < 100
    }, [electricityBillValue])

    return (
        <div className="propose-wrapper">
            <Header title="Case criação de proposta" />
            <div>
                <Input
                    error={cepError}
                    label="CEP"
                    value={zipCodeMask(cepValue)}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) => handleChangeCepValue(item.target.value)}
                    errorMessage="Mínimo 8 caracteres"
                />

                <SelectComponent
                    label="Tipo de estrutura de telhado"
                    name="select"
                    options={esctructureTypes}
                    onChange={(item: React.ChangeEvent<HTMLSelectElement>) =>
                        handleSelectStructureType(item.target.value)
                    }
                    selectedValue={selectedStructureType}
                />

                <Input
                    error={billerror}
                    label="Valor da conta de luz"
                    value={electricityBillValue}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                        setElectricityBillValue(String(currency(item)))
                    }
                    errorMessage="Valor mínimo de R$ 100,00"
                />

                <Button onClick={handleSubmit} disabled={cepError || billerror}>
                    Button
                </Button>
            </div>
        </div>
    )
}

export default ProposeComponent
