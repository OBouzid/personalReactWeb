import React from 'react';
//import logo from '../logo.svg'; // Tell webpack this JS file uses this image
import '../styles/Header.css'

class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            scroll : "header-no-scrolled"
        }
        this.scrollHeader = this.scrollHeader.bind(this)
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollHeader);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollHeader);
    }

    scrollHeader(){
        if(window.scrollY === 0){
            this.setState({scroll: "header-no-scrolled"})
        }
        else
            this.setState({scroll: "header-scrolled"})

    }



    render(){
        return(
            <header id={this.state.scroll}>
                <div><p className="titulo"><a href='/'>ReactRainbow</a></p></div>
                <div>
                    <ul className="menu">
                        <li>Iniciar Sesion</li>
                        <li>Menu</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </header>
        );
        //<img src={logo} alt="Logo"/>;
    }

}

export default Header;