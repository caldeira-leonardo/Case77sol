import React, { useState } from 'react';
import ProposeComponent from '../components/ProposeComponent';
import { submitValuesProps } from '../components/ProposeType';
import api from '../../../services/api';

// const api = 'https://api2.77sol.com.br/busca-cep?estrutura=fibrocimento-metalico&valor_conta=2900&cep=06543-001'

const Propose = (props: any) => {
    const [responseValues, setResponseValues] = useState<any>(null);
    const [errormessage, setErrormessage] = useState('');
    const [loading, setLoading] = useState(false);
    const submit = (values: submitValuesProps) => {
        console.log('values', values); //TODO remove logs
        setLoading(true);
        api.get(
            `busca-cep?estrutura=${values.selectedStructureType.name}&valor_conta=${values.electricityBillValue}&cep=${values.cepValue}`
        )
            .then((res) => setResponseValues(res.data))
            .catch((err) => {
                console.log(err);
                setErrormessage(err.message);
            })
            .finally(() => setLoading(false));
    };

    return <ProposeComponent {...props} {...{ submit, responseValues, errormessage, loading }} />;
};

export default Propose;
