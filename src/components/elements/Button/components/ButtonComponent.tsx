import React, { useState, useEffect } from 'react'
import './ButtonComponent.scss'
import { ButtonProps } from './ButtonType'

const ButtonComponent = (props: ButtonProps) => {
    const { children } = props

    return (
        <button {...props} className="button-wrapper">
            {children}
        </button>
    )
}

export default ButtonComponent
