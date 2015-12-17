import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HeaderActions from '../actions/header'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggleMethod = this.toggleMethod.bind(this)
  }

  toggleMethod() {
    this.props.actions.toggleMethod(this.props.recipe.length)
  }

  render() {
    const { header, recipe, actions } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.link} onClick={this.toggleMethod}>{recipe[header.selected].title}</span>
      </div>
    )
  }
}

Header.propTypes = {

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
    header: state.header
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HeaderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
