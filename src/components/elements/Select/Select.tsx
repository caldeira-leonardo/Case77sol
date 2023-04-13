import React from 'react';
import './Select.scss';
import { SelectProps } from './SelectTypes';

const Select = (props: SelectProps) => {
    const { label, onChange, options, name, className } = props;

    return (
        <div className={`select-wrapper ${className}`}>
            <label>{label}</label>
            <select name={name} onChange={onChange}>
                {options.map((item) => (
                    <option value={item.id} key={item.id} defaultValue={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
