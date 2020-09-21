import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './style.css'
const Header = () => {
    return (
        <header className="main-header">
            <Logo />
            <div className="logo-text1">
                Big Game
            </div>
            <div className="logo-text2">
                Survey
                </div>
        </header>
    );
}
export default Header;