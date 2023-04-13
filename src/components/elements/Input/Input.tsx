import React from 'react';
import './Input.scss';
import { InputProps } from './types';

const Input = (props: InputProps) => {
    const { label, value, onChange, error, errormessage, className, disabled } = props;

    return (
        <div className={`input-wrapper ${error && 'onError'} ${className}`}>
            <label>{label}</label>
            {!disabled ? <input value={value} onChange={onChange} {...props} /> : <div>{value}</div>}
            {error && <span className="errormessage">{errormessage}</span>}
        </div>
    );
};

export default Input;
