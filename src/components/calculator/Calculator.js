import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as RecipeActions from '../../actions/recipe'
import * as UnitActions from '../../actions/unit'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Calculator = (props) => {
  const { methods, unit, actions } = props
  const { params, display, ingredient } = props
  const method = methods[params.index] ? methods[params.index] : methods[0]

  return (
    <div style={styles.container}>
      <div style={styles.display}>
        <div style={styles[display]}>
          <Display
            ingredient={display}
            title={method.title}
            value={method.recipe[display]}
            displayUnit={unit[display]}
            toggleUnit={actions.toggleUnit} />
        </div>
      </div>

      <div style={styles.ingredient}>
        <div style={styles[ingredient]}>
          <Ingredient
            ingredient={ingredient}
            title={method.title}
            value={method.recipe[ingredient]}
            displayUnit={unit[ingredient]}
            handleUpdate={actions.setVal}
            inc={actions.incVal}
            dec={actions.decVal}
            toggleUnit={actions.toggleUnit} />
        </div>
      </div>

      <div style={styles.ratio}>
        <Ratio
          toBeUpdated={display}
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
  display: {
    order: 1,
    height: '40%',
    fontSize: 100,
    textAlign: 'center'
  },
  ingredient: {
    order: 2,
    height: '30%',
    fontSize: 70,
    textAlign: 'center'
  },
  ratio: {
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

Calculator.propTypes ={
  params: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired
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
