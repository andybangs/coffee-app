import React, { Component, PropTypes } from 'react'
import Unit from './Unit'
import { gramsToOunces } from '../util/math'

class Ingredient extends Component {
  constructor(props) {
    super(props)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)

    this.state = { isEditing: false }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    if (isNaN(e.target.value)) return
    this.props.handleUpdate(this.props.ingredient, e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  inc() {
    this.props.inc(this.props.ingredient)
  }

  dec() {
    this.props.dec(this.props.ingredient)
  }

  render() {
    const { ingredient, value, displayUnit, toggleUnit } = this.props
    let displayValue = displayUnit === 'g' ? value : gramsToOunces(value)

    return this.state.isEditing ?
      <div style={styles.container}>
        <input type="number"
          style={styles.input}
          value={displayValue}
          onChange={this.handleUpdate}
          onKeyDown={this.handleSubmit}
          onBlur={this.toggleEdit}
          autoFocus></input>
      </div> :
      <div style={styles.container}>
        <a style={styles.operator} onClick={this.dec}>-</a>
        <a style={styles.value}>
          <span onClick={this.toggleEdit}>{displayValue}</span>
          <Unit
            ingredient={ingredient}
            displayUnit={displayUnit}
            toggleUnit={toggleUnit} />
        </a>
        <a style={styles.operator} onClick={this.inc}>+</a>
      </div>
  }
}

Ingredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  displayUnit: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
  toggleUnit: PropTypes.func.isRequired,
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  value: {
    flex: 3,
    alignSelf: 'center'
  },
  operator: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textAlign: 'center'
  },
  input: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '50%'
  }
}

export default Ingredient
