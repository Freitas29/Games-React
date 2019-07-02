import React, { Component } from 'react';
import ButtonStyled from './buttonStyled'
export default class Button extends Component{
  render(){
    return(
      <ButtonStyled styled={this.props.variant}>{this.props.buttonName}</ButtonStyled>
    )
  }
}
