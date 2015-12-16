import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)

    this.state = { secondsElapsed: 0, lastClearedIncrementer: null }
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2)
  }

  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60)
  }

  handleStartClick() {
    this.incrementer = setInterval(() => {
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 })
    }, 1000)
  }

  handleStopClick() {
    clearInterval(this.incrementer)
    this.setState({ lastClearedIncrementer: this.incrementer })
  }

  handleResetClick() {
    this.setState({ secondsElapsed: 0 })
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.time}>
            <span>{this.getMinutes()}:{this.getSeconds()}</span>
          </div>
        </div>

        <div style={styles.bottom}>
          <div style={styles.buttons}>
            {(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer) ?
              <a style={styles.button} onClick={this.handleStartClick.bind(this)}>start</a> :
              <a style={styles.button} onClick={this.handleStopClick.bind(this)}>stop</a>
            }
            {' '}
            {(this.state.secondsElapsed !== 0) ?
              <a style={styles.button} onClick={this.handleResetClick.bind(this)}>reset</a> :
              null
            }
          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch'
  },
  top: {
    order: 1,
    backgroundColor: '#dae7e8',
    height: '50%',
    fontSize: 100,
    textAlign: 'center'
  },
  bottom: {
    order: 2,
    backgroundColor: '#dae7e8',
    height: '50%',
    fontSize: 35,
    textAlign: 'center'
  },
  time: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    alignSelf: 'baseline',
    cursor: 'pointer',
    color: 'black',
    textAlign: 'center'
  },
}

export default Timer
