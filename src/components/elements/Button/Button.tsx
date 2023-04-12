import React, { useState, useEffect } from 'react'
import './Button.scss'
import { ButtonProps } from './ButtonType'
import Loading from '../Loading/Loading'

const Button = (props: ButtonProps) => {
    const { children, loading, className } = props

    return (
        <button {...props} className={`button-wrapper ${className}`}>
            {loading ? <Loading /> : children}
        </button>
    )
}

export default Button
