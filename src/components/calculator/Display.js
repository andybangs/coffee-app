import React, { PropTypes } from 'react'
import Unit from './Unit'
import { gramsToOunces } from '../../util/math'

const Display = (props) => {
  const { title, ingredient, value, displayUnit, toggleUnit } = props
  let displayValue = displayUnit === 'g' ? value : gramsToOunces(value)

  return (
    <div style={styles.container}>
      <span style={styles.value}>
        {displayValue}
        <Unit
          ingredient={ingredient}
          displayUnit={displayUnit}
          toggleUnit={toggleUnit} />
      </span>
    </div>
  )
}

Display.propTypes = {
  title: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  displayUnit: React.PropTypes.string.isRequired,
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
  }
}

export default Display