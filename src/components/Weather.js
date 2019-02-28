import React, { Component } from 'react'

export class Weather extends Component {
   state={
     threatLevel: undefined
   }
   
  render() {
    const pollution = this.props.pollution
    if (pollution < 30){
      this.threatLevel = <p style={{color: 'green'}}>"Pollution Levels are Safe"</p>
    }
    else{
      this.threatLevel = <p style={{color:'red'}}>"Pollution Level are not safe"</p>
    }

    const divStyle={
        // background: '#E8FCFC',
        display: 'inline-block',
        width: 300,
        height: 200,  
        textAlign: 'left',
        padding: 20,
        boxShadow: "10 20",
       

    }
    
    return (
      
      <div style={divStyle}>
       
      {this.props.city && this.props.location && <p>City: {this.props.city}, State: {this.props.location}</p>}
      {this.props.weather &&  <p>Weather: {this.props.weather} </p>}
      {this.props.pollution && <p>Air Pollution: {this.props.pollution}{this.threatLevel}</p>}
    

      
      </div>
    )
    
  }
}

export default Weather
