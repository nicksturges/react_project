import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';
import Time from './Time';

// API KEY
const API_KEY = '8x2c3xMnPiG2A6R8B';

export class Title extends Component {
  state ={
    city: undefined,
    location: undefined,
    
    
  }
  



  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const location = e.target.elements.location.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${location}&country=${country}&key=${API_KEY}`);

    // api_call.json is data that is fetched from the api being called
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.data.city,
      location: data.data.state,
      pollution: data.data.current.pollution.aqius,
      weather: data.data.current.weather.tp,
      message: "Enter in a New Location",
     
  


    });
    }
    
   
  
   

  render() {
      const titleStyle = {
          backgroundImage: "url('https://vmcdn.ca/f/files/sudbury/sun-clouds.jpg;w=630')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: 20,
          height: 800,
          padding: 10,
          outline: '1px dashed red',
          textAlign: 'center', 
          opacity: 0.8,
          fontFamily: 'Nova Flat, cursive'
        }
       
        
        //  time of day greeting!!!
        const today = new Date( )
        const  hour = today.getHours()
        // const minutes = today.getMinutes()
        // const seconds = today.getSeconds()
        var greeting = ""
        console.log(hour)
        if(today.getHours() < 12){
          greeting = "Good Morning"
         }
         if(today.getHours() < 17){
           greeting = "Good Afternoon"
          }
           
         else{
           greeting= "Good Evening"
         }



        return (
          
          <div style={titleStyle}>
          <Time />
          {/* {hour+":"+ minutes + ":" + seconds} */}
          <h1 style={{color: 'Yellow'}}>{greeting}</h1>
            <h1>Get Pollution/Smoke Levels</h1>
            <p>Piece of mind for the overcautious mom</p>
            
            <Form getData = {this.getData} message={this.state.message} />
            <Weather 
              city= {this.state.city}
              location= {this.state.location}
              pollution={this.state.pollution}
              weather={this.state.weather}/>
           
          </div>
        )
    };
  };
    
    
    export default Title



       
