import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemon: [],
      filteredPokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => {this.setState({
        pokemon: data,
        filteredPokemon: data
      })} )
  }

  searchPokemon = (ev) => {
    let filteredPokemon =
      this.state.pokemon.filter(pokemon => {
        return pokemon.name.includes(ev.target.value)
      })
    this.setState({filteredPokemon})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(ev)=> this.searchPokemon(ev)} showNoResults={false}/>
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonIndex
