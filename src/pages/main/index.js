import React, {Component} from 'react'
import api from '../../services/api'

export default class Main extends Component{

  async componentDidMount() {
    let response = await api.get('/v1/games')
    console.log('response', response)
  }

  render(){
    return(
      <div className="Main">
        <p>Hello main</p>
      </div>
    )
  }
}
