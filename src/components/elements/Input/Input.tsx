import React from 'react';
import './Input.scss';
import { InputProps } from './types';

const Input = (props: InputProps) => {
    const { label, value, onChange, error, errormessage, className } = props;

    return (
        <div className={`input-wrapper ${error && 'onError'} ${className}`}>
            <label>{label}</label>
            <input value={value} onChange={onChange} {...props} />
            {error && <span className="errormessage">{errormessage}</span>}
        </div>
    );
};

export default Input;
