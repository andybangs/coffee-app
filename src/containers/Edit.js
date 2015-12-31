import React, { Component } from 'react'
import EditHeader from '../components/headers/EditHeader'
import EditFooter from '../components/footers/EditFooter'

class Edit extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <EditHeader index={+this.props.params.index} />
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <div style={styles.footer}>
          <EditFooter index={+this.props.params.index} />
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
    height: '9%',
  },
  content: {
    order: 2,
    height: '82%',
  },
  footer: {
    order: 3,
    height: '9%',
  }
}

export default Edit
