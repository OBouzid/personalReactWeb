import React from 'react';

import '../styles/Resumen.css';

class Resumen extends React.Component {

    constructor(props){
        super(props)
        this.autoSroll = this.autoSroll.bind(this)
    }

    componentDidMount() {
        var move = document.getElementById('go_resumen')
        move.addEventListener('click', this.autoSroll);
    }

    componentWillUnmount() {
        var move = document.getElementById('go_resumen')
        move.removeEventListener('scroll', this.autoSroll);
    }
    
    autoSroll(e){
        e.preventDefault()
        var resumen = document.getElementById('resumen')
        console.log(resumen)
        var position = resumen.offsetHeight -resumen.offsetTop;
        console.log(position)
        console.log(resumen.offsetLeft)
        window.moveTo(position, resumen.offsetLeft);
    }

    render(){
        return(
            <div id="resumen">
                <div><h1>Prueba React sin miedo</h1></div>
                <div><img src="/logo192.png" alt="React Logo" height="100" width="100"/></div>
                <div>Si tienes conocimientos sobre JS y CSS intentalo</div>
                <div><button id="go_resumen">▼</button></div>
            </div>
        );
    }

}

export default Resumen;