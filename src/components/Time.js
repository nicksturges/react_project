import React, { Component } from 'react'

// sets time to the local time 

export class Time extends Component {
    state={
        date: new Date()
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      } 

  
    render() {
        return (
          <div>
           <h3>{this.state.date.toLocaleTimeString()} </h3>
          </div>
        )
      }
      
    }
    
    



export default Time
