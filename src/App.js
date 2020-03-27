import React from 'react';
import './App.css';

import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

/*function getList() { 
    fetch(`products.json`)
      .then(response => response.json())
}*/

class App extends React.Component {

  state = { productos: null }

  componentDidMount(){
    console.log('FETCH')
    fetch(`products.json`).then(response => response.json()).then(json => this.setState({productos: json}))
    console.log('INFO' + this.state.productos)
  }

  render(){
    console.log(this.state.productos)
    return (
      <div className="App">
        <Header/>
        <Content list={this.state.productos}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
