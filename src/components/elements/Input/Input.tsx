import React from "react";
import "./Input.scss";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
    const { label, value, onChange, error, errormessage, className, disabled } = props;

    return (
        <div
            className={`input-wrapper ${error ? "onError" : ""} ${className ? className : ""}`}
            data-testid="input-wrapper"
        >
            <label>{label}</label>
            <input value={value} onChange={onChange} {...props} disabled={disabled} data-testid="input" />

            {error && (
                <span className="errormessage" data-testid="error-message">
                    {errormessage}
                </span>
            )}
        </div>
    );
};

export default Input;
