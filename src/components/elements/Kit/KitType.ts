export interface kitProps {
    /**
     * Id do Produto
     */
    id: string | number;

    /**
     * Titulo do Produto
     */
    titulo: string;

    /**
     * Imagem do produto
     */
    url: string;

    /**
     * Quantidade do produto
     */
    qtde: number;

    /**
     * valor do produto
     */
    valor: number;

    /**
     * valor total do produto
     */
    valueTotal: number;

    /**
     * custo do produto
     */
    custo: number;
}
