import React, { Component, PropTypes } from 'react'

class Unit extends Component {
  constructor(props) {
    super(props)
    
    this.toggleUnit = this.toggleUnit.bind(this)
  }

  toggleUnit() {
    this.props.toggleUnit(this.props.ingredient)
  }

  render() {
    const { value, unit, toggleEdit, toggleUnit } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.value}>
          <span onClick={toggleEdit}>{value}</span>
          <span style={styles.unit} onClick={this.toggleUnit}>  {unit}</span>
        </span>
      </div>
    )
  }
}

Unit.propTypes = {
  ingredient: PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  toggleEdit: React.PropTypes.func,
  toggleUnit: React.PropTypes.func
}

const styles = {
  value: {
    alignSelf: 'center'
  },
  unit: {
    fontSize: '0.5em',
    cursor: 'pointer'
  }
}

export default Unit
