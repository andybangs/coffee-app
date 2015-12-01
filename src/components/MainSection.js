import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  render() {
    const { recipes, actions } = this.props

    return (
      <div>
        <div className="pure-menu pure-menu-horizontal" style={{backgroundColor: 'gainsboro', padding: 5}}>
            <a href="#" className="pure-menu-heading pure-menu-link">COFFEE-APP</a>
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Chemex</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Hario V60</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Kalita Wave</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Aeropress</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Presspot</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">+</a></li>
            </ul>
        </div>
        <ul className="pure-g">
          {recipes.map(recipe =>
            <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4 pure-u-xl-1-6" key={recipe.id} {...actions}>
              <h2>{recipe.title}</h2>
              <a href={recipe.url}>{recipe.source}</a>
              <p>Coffee: {recipe.coffee} g</p>
              <p>Water: {recipe.water} ml</p>
              <p>Grind: {recipe.grind}</p>
              <p>Time: {recipe.time} min</p>
              <p>Notes: {recipe.notes}</p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

MainSection.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
