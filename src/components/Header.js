import React from 'react';
import logo from '../logo.svg'; // Tell webpack this JS file uses this image

class Header extends React.Component {

    render(){
        return(
            <header>
                <img src={logo} alt="Logo"/>;
            </header>
        );
    }

}

export default Header;