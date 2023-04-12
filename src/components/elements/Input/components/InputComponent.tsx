import React, { useState, useEffect } from 'react'
import './InputComponent.scss'
import { InputType } from './types'

const InputComponent = (props: InputType) => {
    const { label, value, onChange } = props

    useEffect(() => {
        console.log('value', value) //TODO remove log
    }, [value])

    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={onChange} />
        </>
    )
}

export default InputComponent
