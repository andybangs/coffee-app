import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  render() {
    const { recipes, actions } = this.props

    return (
      <div>
        <ul>
          {recipes.map(recipe =>
            <div key={recipe.id} {...actions}>
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
