import React, { Component } from 'react'
import { PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editMethodTitle } from '../../actions/title'
import { resetRecipe, editInitialRecipe } from '../../actions/initialRecipe'

class EditHeader extends Component {
  constructor(props) {
    super(props)

    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.resetAndGoBack = this.resetAndGoBack.bind(this)

    this.state = { isEditing: false }
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleUpdate(ev) {
    if (ev.target.value === '') return
    this.props.actions.editMethodTitle(this.props.index, ev.target.value)
  }

  handleSubmit(ev) {
    if (ev.which === 13) this.toggleEdit()
  }

  resetAndGoBack() {
    this.props.actions.resetRecipe(this.props.index)
    this.context.history.replaceState(null, 'list')
  }

  render() {
    const { methods, actions, index } = this.props

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
        <a style={styles.edge} onClick={this.resetAndGoBack}>
          <i className="fa fa-chevron-left"></i>
        </a>
        <a style={styles.center}>
          <span onClick={this.toggleEdit}>{methods[index] && methods[index].title}</span>
        </a>
        <a style={styles.edge} onClick={() => actions.resetRecipe(this.props.index)}>
          <i className="fa fa-refresh"></i>
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
    actions: bindActionCreators({ editMethodTitle, resetRecipe, editInitialRecipe }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader)
