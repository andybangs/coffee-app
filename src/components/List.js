import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import ListHeader from './ListHeader'

const List = (props) => {
  const list = props.methods.map((method, index) => {
    return (
      <div key={index} style={styles.rowContainer}>
        <Link to={`coffee/${index}`} style={styles.rowName}>
          {method.title}
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

export default connect(mapStateToProps)(List)
