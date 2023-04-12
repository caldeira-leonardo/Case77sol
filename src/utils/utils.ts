import { InputValuesProps } from '../components/Propose/components/ProposeType';

export const zipCodeMask = (value: string) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value;
};

export const billToNumberFormat = (num: string) => {
    return Number(num.replace('R$ ', '').replace('.', '').replace(',', '.'));
};

export const currency = (unformatedValue: string) => {
    let value = unformatedValue;

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    return `R$ ${value}`;
};

export const esctructureTypes: Array<InputValuesProps> = [
    { id: '1', name: 'fibrocimento-madeira' },
    { id: '2', name: 'fibrocimento-metalico' },
    { id: '3', name: 'ceramico' },
    { id: '4', name: 'metalico' },
    { id: '5', name: 'laje' },
    { id: '6', name: 'solo' },
];
