import React, { useState, useEffect } from 'react'
import './InputComponent.scss'
import { InputProps } from './types'

const InputComponent = (props: InputProps) => {
    const { label, value, onChange, error, errorMessage, className } = props

    return (
        <div className={`input-wrapper ${error && 'onError'} ${className}`}>
            <label>{label}</label>
            <input value={value} onChange={onChange} {...props} />
            {error && <span className="errorMessage">{errorMessage}</span>}
        </div>
    )
}

export default InputComponent
