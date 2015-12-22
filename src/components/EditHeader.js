import React, { Component } from 'react'
import { PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetRecipe, editMethodTitle, editMethodRecipe, deleteMethod } from '../actions/methods'

class EditHeader extends Component {
  constructor(props) {
    super(props)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.saveAndGoBack = this.saveAndGoBack.bind(this)
    this.deleteAndGoBack = this.deleteAndGoBack.bind(this)

    this.state = { isEditing: false }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(e) {
    if (!e.target.value) return
    this.props.actions.editMethodTitle(this.props.index, e.target.value)
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.toggleEdit()
    }
  }

  saveAndGoBack() {
    this.props.actions.editMethodRecipe(this.props.index)
    this.context.history.goBack()
  }

  deleteAndGoBack() {
    this.props.actions.deleteMethod(this.props.index)
    this.context.history.goBack()
  }

  render() {
    const { methods, index } = this.props

    return this.state.isEditing ?
      <div style={styles.container}>
        <input
          style={styles.input}
          value={methods[index].title}
          onChange={this.handleUpdate}
          onKeyDown={this.handleSubmit}
          onBlur={this.toggleEdit}
          autoFocus></input>
      </div> :
      <div style={styles.container}>
        <a style={styles.edge} onClick={this.saveAndGoBack}>
          <i className="fa fa-chevron-left"></i>
        </a>
        <a style={styles.center}>
          <span onClick={this.toggleEdit}>{methods[index] && methods[index].title}</span>
        </a>
        <a style={styles.edge} onClick={this.deleteAndGoBack}>
          <i className="fa fa-times"></i>
        </a>
      </div>
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
  },
  input: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '50%',
    height: '75%',
    fontSize: 25
  }
}

EditHeader.propTypes = {
  index: React.PropTypes.number.isRequired
}

EditHeader.contextTypes = {
  history: PropTypes.history
}

function mapStateToProps(state) {
  return {
    methods: state.methods
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ resetRecipe, editMethodTitle, editMethodRecipe, deleteMethod }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader)
