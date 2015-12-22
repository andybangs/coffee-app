import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectMethod } from '../actions/header'
import ListHeader from './ListHeader'

const List = (props) => {
  const { methods, actions } = props

  const list =  methods.map((method, index) => {
    return (
      <div key={index} style={styles.rowContainer}>
        <a style={styles.rowIcon}></a>
        <Link to="coffee" style={styles.rowName}>
          <span onClick={() => actions.selectMethod(index)}>{method.title}</span>
        </Link>
        <a style={styles.rowIcon}></a>
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
    </div>
  )
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
    height: '91%',
    backgroundColor: '#dae7e8'
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
    flex: 1,
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
    actions: bindActionCreators({ selectMethod }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
