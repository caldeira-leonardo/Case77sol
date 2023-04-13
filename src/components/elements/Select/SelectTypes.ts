export interface SelectValuesProps {
    /**
     * Id único do Select
     */
    id: string;

    /**
     * Nome a ser exibido no dropdown
     */
    name: string;
}
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Titulo do que se trata o select
     */
    label: string;

    /**
     * opções a serem exibidas pelo dropdown
     */
    options: SelectValuesProps[];
}
