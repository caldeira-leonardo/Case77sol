export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Titulo do que se trata o select
     */
    label: string;

    /**
     * opções a serem exibidas pelo dropdown
     */
    options: {
        /**
         * Id único da opção
         */
        id: string;

        /**
         * Titulo que aparecerá na opção
         */
        name: string;
    }[];
}
