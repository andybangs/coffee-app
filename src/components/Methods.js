import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'

class Methods extends Component {
  constructor(props) {
    super(props)

    this.toggleMethod = this.toggleMethod.bind(this)
  }

  toggleMethod() {
    this.props.actions.toggleMethod(this.props.recipe.length)
  }

  render() {
    const { methods, recipe, actions } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.link} onClick={this.toggleMethod}>{recipe[methods.selected].title}</span>
      </div>
    )
  }
}

Methods.propTypes = {

}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  link: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MethodsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Methods)
