import { kitProps } from '../elements/Kit/KitType';
import { ParcelamentoProps } from '../elements/Parcelamento/ParcelamentoType';

export interface ProposeDataProps {
    /**
     * Quantidade de co2
     */
    co2: number;

    /**
     * economia a ser feita
     */
    economia: number;

    /**
     * indiceUnico do item
     */
    indiceUnico: number;

    /**
     * Máximo de integradores
     */
    integradores_maximo: number;

    /**
     * mínimo de integradores
     */
    integradores_minimo: number;

    /**
     * integradores região
     */
    integradores_regiao: number;

    /**
     * irradiancia máxima
     */
    irradiancia_maxima: number;

    /**
     * irradiancia mínima
     */
    irradiancia_minima: number;

    /**
     * irradiancia total
     */
    irradiancia: number;

    /**
     * Porcenteagem de performance performance
     */
    performance: number;

    /**
     * Potencia máxima do sistema
     */
    potenciaSistema: number;

    /**
     * potencial maximo do sismtema
     */
    potencial: string;

    /**
     * potencyCC
     */
    potencyCC: number;

    /**
     * Quantiadde de inversores
     */
    qtdeInversores: number;

    /**
     * Valor da instalação
     */
    valor_instalacao: number;

    /**
     * Kit a ser adquirido
     */
    kit: Array<kitProps>;

    /**
     * Opções de parcelamento
     */
    parcelamento: Array<ParcelamentoProps>;
}
