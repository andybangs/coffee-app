import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MethodsActions from '../actions/methods'

const Methods = (props) => {
  const { methods, actions } = props

  return (
    <div style={styles.container}>
      <span style={styles.link} onClick={actions.selectMethod}>{methods.methods[methods.selected]}</span>
    </div>
  )
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
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MethodsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Methods)
