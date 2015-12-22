import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectMethod } from '../actions/header'
import * as MethodsActions from '../actions/methods'
import ListHeader from './ListHeader'

class List extends Component {
  render() {
    const { methods, actions } = this.props

    const list =  methods.map((method, index, methods) => {
      return (
        <div key={index} style={styles.rowContainer}>
          <a style={styles.rowIcon}>
            <i className="fa fa-bars"></i>
          </a>
          <Link to="coffee" style={styles.rowName}>
            <span onClick={() => actions.selectMethod(index)}>{method.title}</span>
          </Link>
          <Link to={`/edit/coffee/${index}`} style={styles.rowIcon}>
            <i className="fa fa-pencil-square-o"></i>
          </Link>
        </div>
      )
    })

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <ListHeader />
        </div>
        <div style={styles.content}>
          <div style={styles.listContainer}>
            {list}
          </div>
        </div>
        <div style={styles.footer}>
          <div style={styles.rowContainer}>
            <a style={styles.rowIcon}>
              <i className="fa fa-plus"></i> New Method
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'stretch'
  },
  header: {
    order: 1,
    height: '9%'
  },
  content: {
    order: 2,
    height: '82%',
    backgroundColor: '#dae7e8'
  },
  footer: {
    order: 3,
    height: '9%'
  },
  listContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start'
  },
  rowContainer: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    height: 60
  },
  rowName: {
    flex: 4,
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: 25,
    textAlign: 'left'
  },
  rowIcon: {
    flex: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
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
    actions: Object.assign({},
      bindActionCreators({ selectMethod }, dispatch),
      bindActionCreators(MethodsActions, dispatch)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
