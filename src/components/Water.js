import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'
import * as UnitActions from '../actions/unit'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Water = (props) => {
  const { methods, unit, actions, params } = props
  const method = methods[params.index] ? methods[params.index] : methods[0]

  return (
    <div style={styles.container}>
      <div style={styles.water}>
        <Display
          ingredient="water"
          title={method.title}
          value={method.recipe.water}
          displayUnit={unit.water}
          toggleUnit={actions.toggleUnit}/>
      </div>

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

      <div style={styles.ratio}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Water)
