import React, { useState, useEffect } from 'react'
import './ButtonComponent.scss'
import { ButtonProps } from './ButtonType'

const ButtonComponent = (props: ButtonProps) => {
    const { children, loading, className } = props

    return (
        <button {...props} className={`button-wrapper ${className}`}>
            {loading ? (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                children
            )}
        </button>
    )
}

export default ButtonComponent
