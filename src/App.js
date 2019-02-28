import React, { Component } from 'react';
import Title from './components/Title';


export class App extends Component {
  state={
    greeting1: undefined,
    greeting2: undefined
  }
  
   

  render() {
    return (
        <div>
          
          <Title />
         
        </div>
    );
  }
}

export default App;
