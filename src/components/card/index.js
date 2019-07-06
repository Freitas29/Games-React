import React, { Component } from 'react';
import CardStyled from './cardStyled'
import Button from '../button/'
export default class Card extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <CardStyled>
        <div className="card-header">
          <img src={this.props.image} />
        </div>

        <div className="card-body">
          <h1>{this.props.title}</h1>
            <p className="lead">{this.props.description}</p>
            {this.props.plataforms.map(p =>
              <p className="plataforms">{p}</p>
            )}

            {this.props.genres.map(g =>
              <p className="genres">{g}</p>
            )}
        </div>

        <div className="card-footer">
          <Button buttonName="Ver mais" variant="dark"/>
        </div>
      </CardStyled>
    )
  }
}
