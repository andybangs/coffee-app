import React, { Component, PropTypes } from 'react'

class DisplayUnit extends Component {
  constructor(props) {
    super(props)
    this.toggleUnit = this.toggleUnit.bind(this)
    // TODO: TAKE PROPS OUT OF STATE!
    this.state = { unit: this.props.unit }
  }

  toggleUnit() {
    this.setState({ unit: this.state.unit === 'g' ? 'oz' : 'g' })
  }

  render() {
    const { value } = this.props
    const { unit } = this.state

    const num = unit === 'g' ? value : ((+value * 35274) / 1000000).toFixed(1)

    return (
      <div style={styles.container}>
        <span style={styles.value}>
          <span>{num}</span>
          <span style={styles.unit} onClick={this.toggleUnit}>  {unit}</span>
        </span>
      </div>
    )
  }
}

DisplayUnit.propTypes = {
  value: React.PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
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

export default DisplayUnit
