import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RecipeActions from '../actions/recipe'
import * as UnitActions from '../actions/unit'
import Ingredient from './calculator/Ingredient'
import Ratio from './calculator/Ratio'

const Calculator = (props) => {
  const { params, methods, unit, actions } = props
  const method = methods[params.index] ? methods[params.index] : methods[0]

  return (
    <div style={styles.container}>
      <div style={styles.top}>
        <div style={styles.coffee}>
          <Ingredient
            ingredient="coffee"
            title={method.title}
            value={method.recipe.coffee}
            displayUnit={unit.coffee}
            handleUpdate={actions.setVal}
            inc={actions.incVal}
            dec={actions.decVal}
            toggleUnit={actions.toggleUnit} />
        </div>
      </div>

      <div style={styles.middle}>
        <div style={styles.water}>
          <Ingredient
            ingredient="water"
            title={method.title}
            value={method.recipe.water}
            displayUnit={unit.water}
            handleUpdate={actions.setVal}
            inc={actions.incVal}
            dec={actions.decVal}
            toggleUnit={actions.toggleUnit} />
        </div>
      </div>

      <div style={styles.bottom}>
        <Ratio
          toBeUpdated="water"
          title={method.title}
          value={method.recipe.ratio}
          inc={actions.incRatio}
          dec={actions.decRatio}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch'
  },
  top: {
    order: 1,
    height: '35%',
    fontSize: 70,
    textAlign: 'center'
  },
  middle: {
    order: 2,
    height: '35%',
    fontSize: 70,
    textAlign: 'center'
  },
  bottom: {
    order: 3,
    height: '30%',
    fontSize: 70,
    textAlign: 'center',
    backgroundColor: '#dae7e8'
  },
  coffee: {
    backgroundColor: '#bd8468'
  },
  water: {
    backgroundColor: '#60daf0'
  }
}

function mapStateToProps(state) {
  return {
    methods: state.methods,
    unit: state.unit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object.assign({},
      bindActionCreators(RecipeActions, dispatch),
      bindActionCreators(UnitActions, dispatch)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
