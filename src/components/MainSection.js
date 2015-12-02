import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  constructor(props) {
    super(props)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { isEditing: false }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    if (isNaN(e.target.value)) return
    this.props.actions.setWater(e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  render() {
    const { recipe, actions } = this.props
    const water = this.state.isEditing ?
      <input type="text"
        value={recipe.water}
        onChange={this.handleUpdate}
        onKeyDown={this.handleSubmit}
        onBlur={this.toggleEdit}
        autoFocus></input> :
      <div>
        <p onClick={this.toggleEdit}>{recipe.water}</p>
        <button onClick={actions.decWater}>-</button>
        <button onClick={actions.incWater}>+</button>
      </div>

    return (
      <div>
        <div>
          <p>{recipe.coffee.toFixed(1)}</p>
        </div>
        {water}
        <div>
          <p>1:{recipe.ratio}</p>
          <button onClick={actions.decRatio}>-</button>
          <button onClick={actions.incRatio}>+</button>
        </div>
      </div>
    )
  }
}

MainSection.propTypes = {
  recipe: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
