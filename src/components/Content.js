import React from 'react';
import Resumen from './Resumen'
import Box from './Box';
import '../styles/Content.css';

class Content extends React.Component {

    render(){
        if(this.props.list){
            return(
                <div id="content">
                    <Resumen/>
                    <li id='boxes'>
                        {this.props.list.map(item => <Box item={item}/>)}
                    </li>
                </div>
            );
        }
        return null
    }

}

export default Content;