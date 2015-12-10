import React, { PropTypes } from 'react'
import Unit from './Unit'

const Display = (props) => {
  const { ingredient, value, unit, toggleUnit } = props

  return (
    <div style={styles.container}>
      <span style={styles.value}>
        <Unit
          ingredient={ingredient}
          value={value}
          unit={unit}
          toggleUnit={toggleUnit} />
      </span>
    </div>
  )
}

Display.propTypes = {
  ingredient: PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  unit: React.PropTypes.string.isRequired,
  toggleUnit: React.PropTypes.func.isRequired
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
