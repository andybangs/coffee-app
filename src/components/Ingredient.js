import React, { Component, PropTypes } from 'react'

class Ingredient extends Component {
  handleUpdate(e) {
    e.preventDefault()
    this.props.updateWeight(parseInt(e.target.value, 10))
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.props.toggleEdit()
    }
  }

  render() {
    const { increment, decrement, toggleEdit, ingredient } = this.props
    let ingredientNode = ingredient.edit ?
      <input type="number"
        value={ingredient.weight}
        onChange={this.handleUpdate.bind(this)}
        onBlur={toggleEdit}
        onKeyDown={this.handleSubmit.bind(this)}
        autoFocus></input> :
      <div>
        <a href="#" onClick={toggleEdit}>{ingredient.weight} (g)</a>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

    return (
      <div>
        <p>Ingredient</p>
        {ingredientNode}
      </div>
    )
  }
}

Ingredient.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  updateWeight: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired
}

export default Ingredient
