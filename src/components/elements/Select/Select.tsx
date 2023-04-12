import React, { useState, useEffect } from 'react'
import './Select.scss'
import { SelectProps } from './types'
import { InputValuesProps } from '../../Propose/components/ProposeType'

const Select = (props: SelectProps<InputValuesProps>) => {
    const { label, onChange, options, selectedValue, name, className } = props

    return (
        <div className={`select-wrapper ${className}`}>
            <label>{label}</label>
            <select name={name} onChange={onChange}>
                {options.map((item) => (
                    <option value={item.id} key={item.id} selected={item.id === selectedValue.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
