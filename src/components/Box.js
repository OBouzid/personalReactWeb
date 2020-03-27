import React from 'react';

class Header extends React.Component {

    render(){
        return(
            <div class="box">
                <h1>{this.props.item.id}</h1>
                <p>{this.props.item.name}</p>
            </div>
        );
    }
}

export default Header;