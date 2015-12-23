import React, { Component, PropTypes } from 'react'

const Unit = (props) => {
  const { ingredient, displayUnit, toggleUnit } = props

  return <a
            style={styles.unit}
            onClick={() => toggleUnit(ingredient, displayUnit)}>
            {` ${displayUnit}`}
          </a>
}

Unit.propTypes = {
  ingredient: PropTypes.string.isRequired,
  displayUnit: React.PropTypes.string.isRequired,
  toggleUnit: React.PropTypes.func.isRequired
}

const styles = {
  unit: {
    fontSize: '0.6em',
    cursor: 'pointer'
  }
}

export default Unit
