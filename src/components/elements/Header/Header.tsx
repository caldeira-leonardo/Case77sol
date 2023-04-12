import React from 'react';
import './Header.scss';
import Logo from '../../../assets/logo.png';
import { HeaderProps } from './HeaderType';

const Header = ({ title }: HeaderProps) => {
    return (
        <header className="header-wrapper">
            <h2>{title}</h2>
            <img src={Logo} alt="77Sol" />
        </header>
    );
};

export default Header;
