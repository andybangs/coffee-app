import React, { Component, PropTypes } from 'react'
import DisplayUnit from './DisplayUnit'

class Display extends Component {
  render() {
    const { value, unit } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.value}>
          <DisplayUnit value={value} unit={unit} />
        </span>
      </div>
    )
  }
}

Display.propTypes = {
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
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
