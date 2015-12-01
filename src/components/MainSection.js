import React, { Component, PropTypes } from 'react'
import Ingredient from './Ingredient'

class MainSection extends Component {
  render() {
    const { ingredient, actions } = this.props

    return (
      <div>
        <Ingredient
          increment={actions.increment}
          decrement={actions.decrement}
          toggleEdit={actions.toggleEdit}
          updateWeight={actions.updateWeight}
          ingredient={ingredient} />
      </div>
    )
  }
}

MainSection.propTypes = {
  ingredient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
