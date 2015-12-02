import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/MainSection'
import * as RecipeActions from '../actions/recipe'

class App extends Component {
  render() {
    const { recipe, actions } = this.props
    return (
      <div>
        <MainSection recipe={recipe} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  recipe: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
