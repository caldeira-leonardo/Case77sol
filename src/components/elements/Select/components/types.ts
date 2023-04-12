export interface SelectType<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: { id: string; name: string }[]
    selectedValue: T
}
