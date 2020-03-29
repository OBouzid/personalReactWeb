import React from 'react';
import '../styles/Box.css';

class Header extends React.Component {

    render(){
        return(
            <div id="box">
                <h3>{this.props.item.condition}</h3>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}

export default Header;