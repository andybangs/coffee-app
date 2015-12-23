import React from 'react'
import { PropTypes } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GenericHeader from './GenericHeader'
import { addMethod } from '../../actions/methods'

const EditListHeader = (props, context) => {
  const title = 'Edit Methods'
  const leftLink = <i className="fa fa-chevron-left" onClick={() => context.history.replaceState(null, 'list')}></i>
  const rightLink = <i className="fa fa-plus" onClick={() => props.actions.addMethod()}></i>

  return <GenericHeader title={title} leftLink={leftLink} rightLink={rightLink} />
}

EditListHeader.contextTypes = {
  history: PropTypes.history
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addMethod }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EditListHeader)
