import React, {Component} from 'react'
import api from '../../services/api'
import Card from '../../components/card/'
import './index.css'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class Main extends Component{

  state = {
    gamesList: [],
    hasMore: true,
    nextPage: null,
    totalPages: null,
    currentPage: null,
  }

  fetchMoreGames = () => {
    if (this.state.currentPage === this.state.totalPages){
      this.setState({hasMore: false})
      return false
    }  
      api.get('/v1/games/',{
        params: {
        "page": this.state.nextPage
      }
    })
    .then(response => {
      this.setState({
        gamesList: this.state.gamesList.concat(response.data.games),
        currentPage: response.data.meta.current_page,
        nextPage: response.data.meta.next_page
      })
    }).catch(error => {
      console.error("Error get games", error);
    })
  }

  async componentDidMount() {
    await api.get('/v1/games')
    .then(response => {
      this.setState({
        gamesList: response.data.games,
        nextPage: response.data.meta.next_page,
        totalPages: response.data.meta.total_pages,
      })
      
    }).catch(error => {
      console.error("Error get games", error);
    })
  }

  render(){
    const games = this.state.gamesList.map( game =>
                    <Card
                    key={game.id}
                    image={game.image}
                    title={game.title}
                    description={game.description}
                    plataforms={game.plataforms}
                    genres={game.genres}
                    />
                )
    return(
      <InfiniteScroll
          dataLength={this.state.gamesList.length}
          next={this.fetchMoreGames}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
        >
      {games}
      </InfiniteScroll>
    )
  }
}
