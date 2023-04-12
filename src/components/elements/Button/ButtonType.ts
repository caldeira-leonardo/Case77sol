export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Um loading para mostrar que o botão executou alguma ação assincrona
     */
    loading?: boolean;
    /**
     * Adicionar uma classe quando for necessário para somente um botão
     */
    className?: string;
    /**
     * O texto que é mostrado dentro do botão
     */
    label: string;
}
