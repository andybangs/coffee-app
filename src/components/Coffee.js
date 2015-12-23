import React from 'react'
import Calculator from './calculator/Calculator'

const Coffee = (props) => {
  return <Calculator params={props.params} display="coffee" ingredient="water" />
}

export default Coffee
