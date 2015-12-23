import React from 'react'
import Calculator from './calculator/Calculator'

const Water = (props) => {
  return <Calculator params={props.params} display="water" ingredient="coffee" />
}

export default Water
