export interface ParcelamentoProps {
    /**
     * parcelas do produto
     */
    parcelas: number;

    /**
     * Taxa maxima do parcelmaento
     */
    taxa_maxima: number;

    /**
     * Taxa minima do parcelmaento
     */
    taxa_minina: number;

    /**
     * Valor máximo do parcelmaento
     */
    valor_maximo: number;

    /**
     * Valor mínimo do parcelmaento
     */
    valor_minimo: number;
}
