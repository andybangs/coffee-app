import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as RecipesActions from '../actions/recipes'

class App extends Component {
  render() {
    const { recipes, actions } = this.props
    return (
      <div>
        <MainSection recipes={recipes} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
