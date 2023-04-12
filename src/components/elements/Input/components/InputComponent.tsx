import React, { useState, useEffect, useRef } from 'react'
import './InputComponent.scss'
import { InputType } from './types'

const InputComponent = (props: InputType) => {
    const { label, value, onChange, error, errorMessage } = props
    const InputRef = useRef(null)

    useEffect(() => {
        console.log('value', value) //TODO remove log
    }, [value])

    useEffect(() => {
        console.log('InputRef', InputRef) //TODO remove log
    }, [InputRef])

    return (
        <div className={`input-wrapper ${error && 'onError'}`}>
            <label>{label}</label>
            <input value={value} onChange={onChange} ref={InputRef} {...props} />
            {error && <span className="errorMessage">{errorMessage}</span>}
        </div>
    )
}

export default InputComponent
