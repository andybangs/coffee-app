import React from 'react'
import Calculator from './Calculator'

const Coffee = (props) => {
  return <Calculator params={props.params} display="coffee" ingredient="water" />
}

export default Coffee
