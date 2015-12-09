import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CoffeeActions from '../actions/coffee'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Water = (props) => {
  const { recipe, actions } = props

  return (
    <div style={styles.container}>
      <div style={styles.water}>
        <Display
          value={recipe.water.value}
          unit={recipe.water.unit}
          toggleDisplayUnit={actions.toggleDisplayUnit}/>
      </div>

      <div style={styles.coffee}>
        <Ingredient
          value={recipe.coffee.value}
          unit={recipe.coffee.unit}
          handleUpdate={actions.setCoffee}
          inc={actions.incCoffee}
          dec={actions.decCoffee}
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
