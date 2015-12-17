import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'
import Display from './Display'
import Ingredient from './Ingredient'
import Ratio from './Ratio'

const Coffee = (props) => {
  const { header, methods, actions } = props

  return (
    <div style={styles.container}>
      <div style={styles.coffee}>
        <Display
          ingredient="coffee"
          title={methods[header.selected].title}
          value={methods[header.selected].recipe.coffee.valueInGrams.toFixed(1)}
          displayUnit={methods[header.selected].recipe.coffee.displayUnit}
          toggleUnit={actions.toggleUnit} />
      </div>

      <div style={styles.water}>
        <Ingredient
          ingredient="water"
          title={methods[header.selected].title}
          value={methods[header.selected].recipe.water.valueInGrams}
          displayUnit={methods[header.selected].recipe.water.displayUnit}
          handleUpdate={actions.setVal}
          inc={actions.incVal}
          dec={actions.decVal}
          toggleUnit={actions.toggleUnit} />
      </div>

      <div style={styles.ratio}>
        <Ratio
          toBeUpdated="coffee"
          title={methods[header.selected].title}
          value={methods[header.selected].recipe.ratio}
          inc={actions.incRatio}
          dec={actions.decRatio}/>
      </div>
    </div>
  )
}

Coffee.propTypes = {
  header: PropTypes.object.isRequired,
  methods: PropTypes.array.isRequired,
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
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MethodsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
