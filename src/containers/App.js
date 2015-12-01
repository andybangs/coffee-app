import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as IngredientActions from '../actions/ingredient'

class App extends Component {
  render() {
    const { ingredient, actions } = this.props
    return (
      <div>
        <MainSection ingredient={ingredient} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  ingredient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    ingredient: state.ingredient
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IngredientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
