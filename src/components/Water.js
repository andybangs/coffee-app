import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CoffeeActions from '../actions/coffee'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

class Water extends Component {
  render() {
    const { recipe, actions } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.water}>
          <Display value={Math.round(recipe.water)} />
        </div>

        <div style={styles.coffee}>
          <Ingredient
            value={recipe.coffee}
            handleUpdate={actions.setCoffee}
            inc={actions.incCoffee}
            dec={actions.decCoffee} />
        </div>

        <div style={styles.ratio}>
          <Ratio
            value={recipe.ratio}
            inc={actions.incRatio}
            dec={actions.decRatio}/>
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
