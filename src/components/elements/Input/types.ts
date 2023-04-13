export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Descrição do input
     */
    label: string;
    /**
     * Erro que irá alterar o estilo do componente
     */
    error?: boolean | undefined;
    /**
     * Mensagem de erro para validação
     */
    errormessage?: string;
    /**
     * Utilizado para evitar alterações
     */
    disabled?: boolean;
}
