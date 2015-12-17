import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RecipeActions from '../actions/recipe'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Coffee = (props) => {
  const { header, recipe, actions } = props

  return (
    <div style={styles.container}>
      <div style={styles.coffee}>
        <Display
          ingredient="coffee"
          title={recipe[header.selected].title}
          value={recipe[header.selected].recipe.coffee.valueInGrams.toFixed(1)}
          displayUnit={recipe[header.selected].recipe.coffee.displayUnit}
          toggleUnit={actions.toggleUnit} />
      </div>

      <div style={styles.water}>
        <Ingredient
          ingredient="water"
          title={recipe[header.selected].title}
          value={recipe[header.selected].recipe.water.valueInGrams}
          displayUnit={recipe[header.selected].recipe.water.displayUnit}
          handleUpdate={actions.setVal}
          inc={actions.incVal}
          dec={actions.decVal}
          toggleUnit={actions.toggleUnit} />
      </div>

      <div style={styles.ratio}>
        <Ratio
          toBeUpdated="coffee"
          title={recipe[header.selected].title}
          value={recipe[header.selected].recipe.ratio}
          inc={actions.incRatio}
          dec={actions.decRatio}/>
      </div>
    </div>
  )
}

Coffee.propTypes = {
  header: PropTypes.object.isRequired,
  recipe: PropTypes.array.isRequired,
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
    header: state.header,
    recipe: state.recipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
