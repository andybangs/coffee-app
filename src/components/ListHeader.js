import React from 'react'
import { PropTypes } from 'react-router'
import GenericHeader from './GenericHeader'

const ListHeader = (props, context) => {
  const title = 'Brew Methods'
  const leftLink = <i className="fa fa-chevron-left" onClick={() => context.history.goBack()}></i>
  const rightLink = <i className="fa fa-cog" onClick={() => context.history.replaceState(null, 'editlist')}></i>

  return <GenericHeader title={title} leftLink={leftLink} rightLink={rightLink} />
}

ListHeader.contextTypes = {
  history: PropTypes.history
}

export default ListHeader
