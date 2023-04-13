import { SelectValuesProps } from '../../elements/Select/SelectTypes';

export interface submitValuesProps {
    /**
     * Tipo da estrutura do telhado
     */
    selectedStructureType: SelectValuesProps;

    /**
     * Cep a ser verificado
     */
    cepValue: string;

    /**
     * Valor da conta de energia
     */
    electricityBillValue: number;
}

export interface ProposeProps {
    /**
     * Valores a serem enviados na requisição da proposta
     */
    submit(values: submitValuesProps): void;

    /**
     * Valores da proposta recebidos pelo backend
     */
    responseValues: any;

    /**
     * Mensagem de erro do backend
     */
    errormessage: string;

    /**
     * Estado para saber se a requisição ainda não foi completada
     */
    loading: boolean;
}
