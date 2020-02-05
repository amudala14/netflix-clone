import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {arrows_right} from 'react-icons-kit/linea/arrows_right' 

import './Header.css'
import logo from '../../img/svg/logo.svg'

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-top">
                <img src={logo} className="logo" alt="Netflix logo"/>
                <NavLink to= {''} className="signIn-btn">Sign In</NavLink>
            </div>
            <div className="header-card">
                <h1 className="header-title">
                    <span className="main-title">Unlimited movies, TV shows, and more.</span>
                    <span className="secondary-title">Watch anywhere. Cancel anytime.</span>
                </h1>
                <form action="" className="form__subscribe">
                    <div className="subscrib-container">
                        <input type="text" className="form__input subscriber__input"/>
                        <button className="form__btn subscriber__btn">
                            <span>Try it now</span>
                            <Icon icon={arrows_right} size={40} />
                        </button>
                    </div>
                </form>
                <span className="tertiary-title">Ready to watch? Enter your email to create or access your account.</span>
            </div>   
        </header>
    )
}

export default Header;
