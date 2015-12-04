import React, { Component, PropTypes } from 'react'
import Unit from './Unit'

class Ingredient extends Component {
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
    this.props.handleUpdate(e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  render() {
    const { value, inc, dec } = this.props

    return this.state.isEditing ?
      <div style={styles.container}>
        <input type="text"
          style={styles.input}
          value={value}
          onChange={this.handleUpdate}
          onKeyDown={this.handleSubmit}
          onBlur={this.toggleEdit}
          autoFocus></input>
      </div> :
      <div style={styles.container}>
        <span style={styles.operator} onClick={dec}>-</span>
        <a style={styles.value}>
          <Unit value={value} toggleEdit={this.toggleEdit} />
        </a>
        <span style={styles.operator} onClick={inc}>+</span>
      </div>
  }
}

Ingredient.propTypes = {
  value: PropTypes.number.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired,
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
