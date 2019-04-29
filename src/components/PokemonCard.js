import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      clicked: true
    }
  }

  togglePicture = () => {
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
  }

  render() {
    const {name, stats, sprites: {front, back}} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? front: back} onClick={() => this.togglePicture()} />
          </div>
          <div className="content">
            <div className="header">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
          </div>
          <div className="extra content">
          {stats.map((attribute, index) => {
            if(attribute.name === 'hp') {
              return (
                <span key={index}>
                  <i className="icon heartbeat red" />
                  {attribute.name.toUpperCase()}: {attribute.value}
                </span>
              )
              }
            })
          }
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
