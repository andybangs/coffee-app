import React from 'react'
import { PropTypes } from 'react-router'
import GenericHeader from './GenericHeader'

const EditListHeader = (props, context) => {
  const title = 'Edit Methods'
  const leftLink = <i className="fa fa-chevron-left" onClick={() => context.history.replaceState(null, 'list')}></i>
  const rightLink = <i className="fa fa-plus"></i>

  return <GenericHeader title={title} leftLink={leftLink} rightLink={rightLink} />
}

EditListHeader.contextTypes = {
  history: PropTypes.history
}

export default EditListHeader
