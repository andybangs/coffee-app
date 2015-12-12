import React, { Component, PropTypes } from 'react'
import { gramsToOunces } from '../util/math'

class Unit extends Component {
  constructor(props) {
    super(props)

    this.toggleUnit = this.toggleUnit.bind(this)
  }

  toggleUnit() {
    this.props.toggleUnit(this.props.ingredient)
  }

  render() {
    const { value, displayUnit, toggleEdit, toggleUnit } = this.props
    let displayValue = displayUnit === 'g' ? value : gramsToOunces(value)

    return (
      <div>
        <span style={styles.value}>
          <span onClick={toggleEdit}>{displayValue}</span>
          <span style={styles.unit} onClick={this.toggleUnit}>  {displayUnit}</span>
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
