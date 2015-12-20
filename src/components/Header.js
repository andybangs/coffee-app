import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
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
    const { header, methods, actions } = this.props

    // TODO: Find a better place for this
    if (!methods[header.selected]) {
      actions.selectMethod(0)
    }

    let method = methods[header.selected] ? methods[header.selected] : methods[0]

    return (
      <div style={styles.container}>
        <Link to="list" style={styles.edge}>
          <i className="fa fa-bars"></i>
        </Link>
        <a style={styles.center} onClick={this.toggleMethod}>
          {method.title}
        </a>
        <a style={styles.edge} onClick={this.resetRecipe}>
          <i className="fa fa-refresh"></i>
        </a>
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
