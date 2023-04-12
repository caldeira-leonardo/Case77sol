import React, { useState, useEffect } from 'react'
import './SelectComponent.scss'
import { SelectProps } from './types'
import { InputValuesProps } from '../../../Propose/components/ProposeType'

const SelectComponent = (props: SelectProps<InputValuesProps>) => {
    const { label, onChange, options, selectedValue, name } = props

    return (
        <div className={`select-wrapper`}>
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

export default SelectComponent
