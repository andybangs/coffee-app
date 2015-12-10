import { TOGGLE_COFFEE_UNIT, TOGGLE_WATER_UNIT }  from '../constants/unit'
import { INC_WATER, DEC_WATER, SET_WATER, INC_RATIO_UPDATE_COFFEE, DEC_RATIO_UPDATE_COFFEE } from '../constants/water'

export function incWater() {
  return {
    type: INC_WATER
  }
}

export function decWater() {
  return {
    type: DEC_WATER
  }
}

export function setWater(water) {
  return {
    type: SET_WATER,
    water
  }
}

export function incRatio() {
  return {
    type: INC_RATIO_UPDATE_COFFEE
  }
}

export function decRatio() {
  return {
    type: DEC_RATIO_UPDATE_COFFEE
  }
}

export function toggleUnit() {
  return {
    type: TOGGLE_WATER_UNIT
  }
}

export function toggleDisplayUnit() {
  return {
    type: TOGGLE_COFFEE_UNIT
  }
}
