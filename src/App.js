import React, { Component } from 'react';
import './App.css';
import str from './lessons/conditionsInJSX'

class App extends Component {

  constructor() {
    super()
    this.state = {
      right : true,
      len : 0
    }
  }


  handleChange = e => {
    console.log(e.target.value.length)
    if( str.indexOf(e.target.value) === 0 ) {
      this.setState({right:true, len: e.target.value.length})
    } else {
      this.setState({right:false, len: e.target.value.length})
    }
  }


  render() {
    let { right, len } = this.state

    return (
      <div className="App">
        <textarea style={{background : (right ? '#fff' : '#faa')}} onChange={ this.handleChange } rows="10" cols="45" name="text"></textarea>
        <pre>
          { str.split('').map((el, index)=> {
              // let style = index > len ? { opacity : .5 } : { opacity : 1 }
              return <span className={index < len ? 'active' : ''} key={index}>{el}</span>
            }) 
          }
        </pre>
      </div>
    );
  }
}

export default App;
