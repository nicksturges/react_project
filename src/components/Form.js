import React, { Component } from 'react';
export class Form extends Component {
    render() {
          const weatherStyle ={
             background: '#E8FCFC',
             display: 'inline-block',
             width: 300,
             height: 300,  
             textAlign: 'left',
             padding: 20,
             boxShadow: "5 10",
            }
            

          const buttonStyle ={
                marginTop: 10
            }
            const weatherform = {
             display: 'block'
            }
        return (
          <div className="shadow-lg p-3 mb-5 rounded" style={weatherStyle}>
          {this.props.message && <p style={{color:'green'}}>{this.props.message}  </p>}
        <form onSubmit={this.props.getData}>
            City: <input style={weatherform} name="city"  type="text" placeholder="enter city..." ></input>
            State:
            <input style={weatherform} name="location" type="text" placeholder="enter state..."></input>
            Country:
            <input style={weatherform} name="country" type="text" placeholder="enter country..."></input>
            <button style={buttonStyle}>Submit</button>
          
        </form>
             
            
    
          </div>
        )
      }
    }
              
  
    
    export default Form
             
   
             
          