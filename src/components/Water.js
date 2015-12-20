import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'
import * as UnitActions from '../actions/unit'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Water = (props) => {
  const { header, methods, unit, methodsActions, unitActions } = props
  const method = methods[header.selected]

  return (
    <div style={styles.container}>
      <div style={styles.water}>
        <Display
          ingredient="water"
          title={method.title}
          value={method.recipe.water}
          displayUnit={unit.water}
          toggleUnit={unitActions.toggleUnit}/>
      </div>

      <div style={styles.coffee}>
        <Ingredient
          ingredient="coffee"
          title={method.title}
          value={method.recipe.coffee}
          displayUnit={unit.coffee}
          handleUpdate={methodsActions.setVal}
          inc={methodsActions.incVal}
          dec={methodsActions.decVal}
          toggleUnit={unitActions.toggleUnit} />
      </div>

      <div style={styles.ratio}>
        <Ratio
          toBeUpdated="water"
          title={method.title}
          value={method.recipe.ratio}
          inc={methodsActions.incRatio}
          dec={methodsActions.decRatio}/>
      </div>
    </div>
  )
}

Water.propTypes = {
  header: PropTypes.object.isRequired,
  methods: PropTypes.array.isRequired,
  methodsActions: PropTypes.object.isRequired,
  unitActions: PropTypes.object.isRequired
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
    header: state.header,
    methods: state.methods,
    unit: state.unit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    methodsActions: bindActionCreators(MethodsActions, dispatch),
    unitActions: bindActionCreators(UnitActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Water)
