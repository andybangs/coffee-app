import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WaterActions from '../actions/water'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

class Coffee extends Component {
  render() {
    const { recipe, actions } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.coffee}>
          <Display value={recipe.coffee.value.toFixed(1)} />
        </div>

        <div style={styles.water}>
          <Ingredient
            value={recipe.water.value}
            unit={recipe.water.unit}
            handleUpdate={actions.setWater}
            inc={actions.incWater}
            dec={actions.decWater}
            toggleUnit={actions.toggleUnit} />
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
