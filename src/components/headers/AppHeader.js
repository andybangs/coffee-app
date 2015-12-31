import React, { Component } from 'react'
import { Link, PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetRecipe } from '../../actions/initialRecipe'

class AppHeader extends Component {
  componentWillMount() {
    const { methods, pathname, index } = this.props
    const { history } = this.context

    let safeIndex = index < methods.length ? index : 0

    if (index !== safeIndex) {
      let url = pathname.slice(0, pathname.length - 1).concat(safeIndex)
      history.replaceState(null, url)
    }
  }

  render() {
    const { methods, actions, pathname, index } = this.props
    const { history } = this.context

    let safeIndex = index < methods.length ? index : 0
    let nextIndex = index + 1 < methods.length ? index + 1 : 0
    let nextUrl = pathname.slice(0, pathname.length - 1).concat(nextIndex)

    return (
      <div style={styles.container}>
        <Link to="list" style={styles.edge}>
          <i className="fa fa-bars"></i>
        </Link>
        <Link to={nextUrl} style={styles.center}>
          {methods[safeIndex].title}
        </Link>
        <a style={styles.edge} onClick={() => actions.resetRecipe(index)}>
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

AppHeader.propTypes = {
  pathname: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired
}

AppHeader.contextTypes = {
  history: PropTypes.history
}

function mapStateToProps(state) {
  return {
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ resetRecipe }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
