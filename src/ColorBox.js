import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  renderOpacity = () =>{ 
    const newValue = this.props.opacity;
    return newValue < 0.2 ? null : (
      < ColorBox opacity = {newValue - 0.1} /> 
    
    )}
    
  render() {
    
    
       console.log(this.props)   
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
       {this.renderOpacity()}
      </div>
    )
  }

}

