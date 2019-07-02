import React, { Component } from 'react';
import CardStyled from './cardStyled'
export default class Card extends Component {
  render(){
    return(
      <CardStyled>
        <div className="card-header">
          <img src={this.props.image} />
        </div>

        <div className="title">
            <span>{this.props.title}</span>
        </div>
        <p>{this.props.description}</p>
        <p>{this.props.plataforms}</p>
        <p>{this.props.genres}</p>



      </CardStyled>
    )
  }
}
