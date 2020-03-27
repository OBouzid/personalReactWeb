import React from 'react';
import Box from './Box';

class Content extends React.Component {

    render(){
        console.log('Content')
        console.log(this.props)
        if(this.props.list){
            return(
                <li>
                    {this.props.list.map(item => <Box item={item}/>)}
                </li>
            );
        }
        return null
    }

}

export default Content;