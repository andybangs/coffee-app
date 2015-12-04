import React, { Component, PropTypes } from 'react'

class Unit extends Component {
  constructor(props) {
    super(props)
    this.changeUnit = this.changeUnit.bind(this)
    this.state = { unit: 'g' }
  }

  changeUnit() {
    this.setState({ unit: this.state.unit === 'g' ? 'oz' : 'g' })
  }

  render() {
    const { value, toggleEdit } = this.props
    const { unit } = this.state

    const num = unit === 'g' ? value : ((+value * 35274) / 1000000).toFixed(1)

    return (
      <div style={styles.container}>
        <span style={styles.value}>
          <span onClick={toggleEdit}>{num}</span>
          <span style={styles.unit} onClick={this.changeUnit.bind(this)}>  {unit}</span>
        </span>
      </div>
    )
  }
}

Unit.propTypes = {
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  toggleEdit: React.PropTypes.func
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
