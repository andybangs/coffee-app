import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WaterActions from '../actions/water'

class Coffee extends Component {
  constructor(props) {
    super(props)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { isEditing: false }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    if (isNaN(e.target.value)) return
    this.props.actions.setWater(e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  render() {
    const { recipe, actions } = this.props
    const water = this.state.isEditing ?
      <div style={styles.innerContainer}>
        <input type="text"
          style={styles.input}
          value={recipe.water}
          onChange={this.handleUpdate}
          onKeyDown={this.handleSubmit}
          onBlur={this.toggleEdit}
          autoFocus></input>
      </div> :
      <div style={styles.innerContainer}>
        <span style={styles.innerEdge} onClick={actions.decWater}>-</span>
        {' '}
        <a style={styles.innerCenter} onClick={this.toggleEdit}>{recipe.water}</a>
        {' '}
        <span style={styles.innerEdge} onClick={actions.incWater}>+</span>
      </div>

    return (
      <div style={styles.container}>
        <div style={styles.coffee}>
          <div style={styles.innerContainer}>
            <span style={styles.innerDisplay}>{recipe.coffee.toFixed(1)}</span>
          </div>
        </div>

        <div style={styles.water}>
          {water}
        </div>

        <div style={styles.ratio}>
          <div style={styles.innerContainer}>
            <span style={styles.innerEdge} onClick={actions.decRatio}>-</span>
            {' '}
            <a style={styles.innerCenter}>1:{recipe.ratio}</a>
            {' '}
            <span style={styles.innerEdge} onClick={actions.incRatio}>+</span>
          </div>
        </div>
      </div>
    )
  }
}

Coffee.propTypes = {
  recipe: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch'
  },
  innerContainer: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  innerDisplay: {
    alignSelf: 'center'
  },
  innerCenter: {
    flex: 3,
    alignSelf: 'center'
  },
  innerEdge: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textAlign: 'center'
  },
  input: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '50%'
  },
  coffee: {
    order: 1,
    backgroundColor: '#bd8468',
    height: '40%',
    fontSize: 100,
    textAlign: 'center'
  },
  water: {
    order: 2,
    backgroundColor: '#60daf0',
    height: '30%',
    fontSize: 70,
    textAlign: 'center'
  },
  ratio: {
    order: 3,
    backgroundColor: '#dae7e8',
    height: '30%',
    fontSize: 70,
    textAlign: 'center'
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(WaterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
