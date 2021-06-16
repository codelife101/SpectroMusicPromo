import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.svg';
import icon from '../img/icon.svg';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return(
        <nav>
            <img src={logo} alt="logo" /> 
            <button onClick={() => setLibraryStatus (!libraryStatus)}>
                <img src={icon} alt="icon" />
            </button>
        </nav>
    )
}

export default Nav;