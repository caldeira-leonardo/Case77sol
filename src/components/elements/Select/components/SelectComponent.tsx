import React, { useState, useEffect } from 'react'
import './SelectComponent.scss'
import { SelectType } from './types'
import { InputValuesType } from '../../../Propose/components/ProposeType'

const SelectComponent = (props: SelectType<InputValuesType>) => {
    const { label, onChange, options, selectedValue, name } = props

    return (
        <>
            <label>{label}</label>
            <select name={name} onChange={onChange}>
                {options.map((item) => (
                    <option value={item.id} key={item.id} selected={item.id === selectedValue.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </>
    )
}

export default SelectComponent
