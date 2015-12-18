import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HeaderActions from '../actions/header'
import { resetRecipe } from '../actions/methods'

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggleMethod = this.toggleMethod.bind(this)
    this.resetRecipe = this.resetRecipe.bind(this)
  }

  toggleMethod() {
    const { actions, methods } = this.props

    actions.toggleMethod(methods.length)
  }

  resetRecipe() {
    const { actions, header, methods } = this.props

    actions.resetRecipe(methods[header.selected].title)
  }

  render() {
    const { header, methods } = this.props

    return (
      <div style={styles.container}>
        <span style={styles.edge} onClick={this.resetRecipe}>
          <i className="fa fa-refresh"></i>
        </span>
        <span style={styles.center} onClick={this.toggleMethod}>{methods[header.selected].title}</span>
        <span style={styles.edge} onClick={this.resetRecipe}>
          <i className="fa fa-plus"></i>
        </span>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  center: {
    flex: 3,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  edge: {
    flex: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center'
  }
}

function mapStateToProps(state) {
  return {
    header: state.header,
    methods: state.methods,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object.assign({},
      bindActionCreators(HeaderActions, dispatch),
      bindActionCreators({ resetRecipe }, dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
