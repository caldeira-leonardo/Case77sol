import { useEffect, useState } from 'react'
import './ProposeComponent.scss'
import Input from '../../elements/Input/containers/Input'
import { InputValuesType } from './ProposeType'
import SelectComponent from '../../elements/Select/components/SelectComponent'

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
        <div>
            <header>Criação de Proposta</header>
            <div>
                <Input
                    label="CEP"
                    value={zipCodeMask(cepValue)}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) => handleChangeCepValue(item.target.value)}
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
                    label="Valor da conta de luz"
                    type
                    value={electricityBillValue}
                    onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                        setElectricityBillValue(Number(item.target.value))
                    }
                />
            </div>
        </div>
    )
}

export default ProposeComponent
