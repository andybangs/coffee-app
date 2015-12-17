import React, { Component, PropTypes } from 'react'

class Unit extends Component {
  constructor(props) {
    super(props)

    this.toggleUnit = this.toggleUnit.bind(this)
  }

  toggleUnit() {
    this.props.toggleUnit(this.props.title, this.props.ingredient)
  }

  render() {
    const { displayUnit, toggleUnit } = this.props

    return <span style={styles.unit} onClick={this.toggleUnit}> {displayUnit}</span>
  }
}

Unit.propTypes = {
  title: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  displayUnit: React.PropTypes.string.isRequired,
  toggleUnit: React.PropTypes.func.isRequired
}

const styles = {
  unit: {
    fontSize: '0.5em',
    cursor: 'pointer'
  }
}

export default Unit
