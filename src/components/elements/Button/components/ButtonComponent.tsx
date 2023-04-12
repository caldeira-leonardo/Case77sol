import React, { useState, useEffect } from 'react'
import './ButtonComponent.scss'
import { ButtonType } from './ButtonType'

const ButtonComponent = (props: ButtonType) => {
    const { children } = props

    return (
        <button {...props} className="button-wrapper">
            {children}
        </button>
    )
}

export default ButtonComponent
