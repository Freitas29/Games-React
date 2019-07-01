import React, { Component } from 'react';

export default class Card extends Component {
  render(){
    return(
      <div className="card">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.props.plataforms}</p>
        <p>{this.props.genres}</p>
      </div>
    )
  }
}
