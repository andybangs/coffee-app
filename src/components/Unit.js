import React, { PropTypes } from 'react'

const Unit = (props) => {
  const { value, unit, toggleEdit, toggleUnit } = props

  return (
    <div style={styles.container}>
      <span style={styles.value}>
        <span onClick={toggleEdit}>{value}</span>
        <span style={styles.unit} onClick={toggleUnit}>  {unit}</span>
      </span>
    </div>
  )
}

Unit.propTypes = {
  value: React.PropTypes.number.isRequired,
  toggleEdit: React.PropTypes.func.isRequired
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
