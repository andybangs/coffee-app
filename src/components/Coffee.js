import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'
import * as UnitActions from '../actions/unit'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Coffee = (props) => {
  const { methods, unit, actions, params } = props
  const method = methods[params.index] ? methods[params.index] : methods[0]

  return (
    <div style={styles.container}>
      <div style={styles.coffee}>
        <Display
          ingredient="coffee"
          title={method.title}
          value={method.recipe.coffee.toFixed(1)}
          displayUnit={unit.coffee}
          toggleUnit={actions.toggleUnit} />
      </div>

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

      <div style={styles.ratio}>
        <Ratio
          toBeUpdated="coffee"
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
    methods: state.methods,
    unit: state.unit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object.assign({},
      bindActionCreators(MethodsActions, dispatch),
      bindActionCreators(UnitActions, dispatch)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
