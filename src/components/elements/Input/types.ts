export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Descrição do input
     */
    label: string;
    /**
     * Erro que irá alterar o estilo do componente
     */
    error?: boolean;
    /**
     * Mensagem de erro para validação
     */
    errormessage?: string;
}
