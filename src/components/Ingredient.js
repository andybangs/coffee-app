import React, { Component, PropTypes } from 'react'

class Ingredient extends Component {
  render() {
    const { increment, decrement, ingredient } = this.props

    return (
      <div>
        <p>Ingredient</p>
        <p>{ingredient} (g)</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    )
  }
}

Ingredient.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  ingredient: PropTypes.number.isRequired
}

export default Ingredient
