import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ingredient from '../components/Ingredient'
import * as IngredientActions from '../actions/ingredient'

function mapStateToProps(state) {
  return {
    ingredient: state.ingredient
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(IngredientActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient)
