import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CoffeeActions from '../actions/coffee'

class Water extends Component {
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
    this.props.actions.setCoffee(e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  render() {
    const { recipe, actions } = this.props
    const coffee = this.state.isEditing ?
      <div style={styles.innerContainer}>
        <input type="text"
          style={styles.input}
          value={recipe.coffee}
          onChange={this.handleUpdate}
          onKeyDown={this.handleSubmit}
          onBlur={this.toggleEdit}
          autoFocus></input>
      </div> :
      <div style={styles.innerContainer}>
        <span style={styles.innerEdge} onClick={actions.decCoffee}>-</span>
        {' '}
        <a style={styles.innerCenter} onClick={this.toggleEdit}>{recipe.coffee}</a>
        {' '}
        <span style={styles.innerEdge} onClick={actions.incCoffee}>+</span>
      </div>

    return (
      <div style={styles.container}>
        <div style={styles.water}>
          <div style={styles.innerContainer}>
            <span style={styles.innerDisplay}>{Math.round(recipe.water)}</span>
          </div>
        </div>

        <div style={styles.coffee}>
          {coffee}
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

Water.propTypes = {
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
  water: {
    order: 1,
    backgroundColor: '#60daf0',
    height: '40%',
    fontSize: 100,
    textAlign: 'center'
  },
  coffee: {
    order: 2,
    backgroundColor: '#bd8468',
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
    actions: bindActionCreators(CoffeeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Water)
