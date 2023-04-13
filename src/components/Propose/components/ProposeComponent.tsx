import React, { useEffect, useMemo, useState } from 'react';
import './ProposeComponent.scss';
import Header from '../../elements/Header/Header';
import { billToNumberFormat, currency, esctructureTypes, zipCodeMask } from '../../../utils/utils';
import Input from '../../elements/Input/Input';
import Select from '../../elements/Select/Select';
import Button from '../../elements/Button/Button';
import ProposeData from '../../ProposeData/ProposeData';
import { SelectValuesProps } from '../../elements/Select/SelectTypes';
import { ProposeProps, submitValuesProps } from './ProposeType';

const ProposeComponent = ({ submit, responseValues, errormessage, loading }: ProposeProps) => {
    const [selectedStructureType, setSelectedStructureType] = useState<SelectValuesProps>({
        id: '1',
        name: 'fibrocimento-madeira',
    });
    const [cepValue, setCepValue] = useState<string>('');
    const [electricityBillValue, setElectricityBillValue] = useState<string>('R$ ');
    const [wasCepFocused, setWasCepFocused] = useState(false);
    const [wasBillFocused, setWasBillFocused] = useState(false);

    const handleSelectStructureType = (item: string) => {
        setSelectedStructureType(esctructureTypes.filter((struc) => struc.id === item)[0]);
    };

    const handleChangeCepValue = (value: string) => {
        if (value.length > 9) return;
        setCepValue(value);
    };

    const handleSubmit = () => {
        const values: submitValuesProps = {
            selectedStructureType,
            cepValue,
            electricityBillValue: billToNumberFormat(electricityBillValue),
        };

        submit(values);
    };

    const headerTitle = responseValues ? 'Case Proposta' : 'Case criação de proposta';

    const cepError = useMemo(() => {
        return cepValue.length < 9;
    }, [cepValue]);

    const billerror = useMemo(() => {
        return billToNumberFormat(electricityBillValue) < 100;
    }, [electricityBillValue]);

    const render = () => {
        if (responseValues) return <ProposeData {...{ ...responseValues }} />;

        return (
            <>
                <div className="form">
                    <Input
                        error={wasCepFocused ? cepError : false}
                        onFocus={() => setWasCepFocused(true)}
                        label="CEP"
                        value={zipCodeMask(cepValue)}
                        onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeCepValue(item.target.value)
                        }
                        errormessage="Mínimo 8 caracteres"
                    />

                    <Input
                        error={wasBillFocused ? billerror : false}
                        onFocus={() => setWasBillFocused(true)}
                        label="Valor da conta de luz"
                        value={electricityBillValue}
                        onChange={(item: React.ChangeEvent<HTMLInputElement>) =>
                            setElectricityBillValue(String(currency(item.target.value)))
                        }
                        errormessage="Valor mínimo de R$ 100,00"
                    />

                    <Select
                        className="select"
                        label="Tipo de estrutura de telhado"
                        name="select"
                        options={esctructureTypes}
                        onChange={(item: React.ChangeEvent<HTMLSelectElement>) =>
                            handleSelectStructureType(item.target.value)
                        }
                    />

                    <Button
                        onClick={handleSubmit}
                        disabled={cepError || billerror || loading}
                        loading={loading}
                        className="confirmationButton"
                        label="Enviar proposta"
                    />
                </div>
                <span>{errormessage}</span>
            </>
        );
    };

    return (
        <div className="propose-wrapper">
            <Header title={headerTitle} />
            {render()}
        </div>
    );
};

export default ProposeComponent;
