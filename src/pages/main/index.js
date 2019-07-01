import React, {Component} from 'react'
import api from '../../services/api'
import Card from '../../components/card/'

export default class Main extends Component{

  state = {
    gamesList: [],
  }

  async componentDidMount() {
    await api.get('/v1/games')
    .then(response => {
      this.setState({gamesList: response.data})
    }).catch(error => {
      console.error("Error get games", error);
    })
  }

  render(){
    return(
      <div className="Main">
        {this.state.gamesList.map( game =>
          <Card
          title={game.title}
          description={game.description}
          plataforms={game.plataforms}
          genres={game.genres}
          />
        )}
      </div>
    )
  }
}
