import { INC_COFFEE, DEC_COFFEE, INC_RATIO_UPDATE_WATER, DEC_RATIO_UPDATE_WATER } from '../constants/coffee'
import { TOGGLE_COFFEE_UNIT, TOGGLE_WATER_UNIT }  from '../constants/unit'

export function incCoffee() {
  return {
    type: INC_COFFEE
  }
}

export function decCoffee() {
  return {
    type: DEC_COFFEE
  }
}

export function setCoffee(coffee) {
  return {
    type: SET_COFFEE,
    coffee
  }
}

export function incRatio() {
  return {
    type: INC_RATIO_UPDATE_WATER
  }
}

export function decRatio() {
  return {
    type: DEC_RATIO_UPDATE_WATER
  }
}

export function toggleUnit() {
  return {
    type: TOGGLE_COFFEE_UNIT
  }
}

export function toggleDisplayUnit() {
  return {
    type: TOGGLE_WATER_UNIT
  }
}
