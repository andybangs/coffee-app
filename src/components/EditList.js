import React from 'react'
import { PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteMethod } from '../actions/methods'
import EditListHeader from './EditListHeader'

const EditList = (props, context) => {
  const { methods, actions } = props
  const { history} = context

  const list =  methods.map((method, index) => {
    return (
      <div key={index} style={styles.rowContainer}>
        <a style={styles.rowIcon}>
          <i className="fa fa-bars"></i>
        </a>
        <a style={styles.rowName} onClick={() => history.replaceState(null, `/edit/coffee/${index}`)}>
          {method.title}
        </a>
        <a style={styles.rowIcon} onClick={() => actions.deleteMethod(index)}>
          <i className="fa fa-times"></i>
        </a>
      </div>
    )
  })

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <EditListHeader />
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

EditList.contextTypes = {
  history: PropTypes.history
}

function mapStateToProps(state) {
  return {
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ deleteMethod }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
