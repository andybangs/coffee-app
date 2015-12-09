import React, { Component, PropTypes } from 'react'
import Unit from './Unit'

const Display = (props) => {
  const { value, unit, toggleDisplayUnit } = props

  return (
    <div style={styles.container}>
      <span style={styles.value}>
        <Unit value={value} unit={unit} toggleUnit={toggleDisplayUnit} />
      </span>
    </div>
  )
}

Display.propTypes = {
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  unit: React.PropTypes.string.isRequired,
  toggleDisplayUnit: React.PropTypes.func.isRequired
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  value: {
    alignSelf: 'center'
  },
  unit: {
    fontSize: '0.5em'
  }
}

export default Display
