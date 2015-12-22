import React, { Component } from 'react'
import EditHeader from '../components/EditHeader'
import EditNav from '../components/EditNav'

class Edit extends Component {
  render() {
    const links = [
      { to: `edit/coffee/${this.props.params.index}`, label: <i className="fa fa-coffee"></i> },
      { to: `edit/water/${this.props.params.index}`, label: <i className="fa fa-tint"></i> }
    ]

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <EditHeader index={+this.props.params.index} />
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
        <div style={styles.footer}>
          <EditNav links={links} />
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
