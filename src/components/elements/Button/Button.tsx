import React, { useState, useEffect } from 'react';
import './Button.scss';
import { ButtonProps } from './ButtonType';
import Loading from '../Loading/Loading';

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, loading = false, className, disabled = false, ...props }: ButtonProps) => {
    return (
        <button {...props} className={`button-wrapper ${className}`} disabled={disabled} data-testid="button">
            {loading ? <Loading /> : label}
        </button>
    );
};

export default Button;
