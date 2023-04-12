import { useEffect, useState } from 'react'
import './ProposeComponent.scss'
import Input from '../../elements/Input/containers/Input'
import { InputValuesType } from './ProposeType'
import SelectComponent from '../../elements/Select/components/SelectComponent'
import Button from '../../elements/Button/containers/Button'
import Header from '../../elements/Header/Header'

const ProposeComponent = (props: any) => {
    const [selectedStructuretype, setselectedStructuretype] = useState<InputValuesType>({
        id: '1',
        name: 'fibrocimento-madeira',
    })
    const [cepValue, setCepValue] = useState<string>('asd')
    const [electricityBillValue, setElectricityBillValue] = useState<number>(0)

    const esctructureTypes: Array<InputValuesType> = [
        { id: '1', name: 'fibrocimento-madeira' },
        { id: '2', name: 'fibrocimento-metalico' },
        { id: '3', name: 'ceramico' },
        { id: '4', name: 'metalico' },
        { id: '5', name: 'laje' },
        { id: '6', name: 'solo' },
    ]

    const handleSelectStructureType = (item: string) => {
        setselectedStructuretype(esctructureTypes.filter((struc) => struc.id === item)[0])
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

    return (
        <div className="propose-wrapper">
            <Header title="Criação de proposta" />
            <div>
                <Input
                    error={cepValue.includes('9')}
                    label="CEP"
                    value={zipCodeMask(cepValue)}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) => handleChangeCepValue(item.target.value)}
                    errorMessage="Deu ruim"
                />

                <SelectComponent
                    label="Tipo de estrutura de telhado"
                    name="select"
                    options={esctructureTypes}
                    onChange={(item: React.ChangeEvent<HTMLSelectElement>) =>
                        handleSelectStructureType(item.target.value)
                    }
                    selectedValue={selectedStructuretype}
                />

                <Input
                    error={String(electricityBillValue).includes('9')}
                    label="Valor da conta de luz"
                    value={electricityBillValue}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                        setElectricityBillValue(Number(item.target.value.replace(/\D/g, '')))
                    }
                    errorMessage="Deu ruim"
                />

                <Button>Button</Button>
            </div>
        </div>
    )
}

export default ProposeComponent
