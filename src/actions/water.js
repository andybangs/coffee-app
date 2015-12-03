export const INC_WATER = 'INC_WATER'
export const DEC_WATER = 'DEC_WATER'
export const SET_WATER = 'SET_WATER'
export const INC_RATIO_UPDATE_COFFEE = 'INC_RATIO_UPDATE_COFFEE'
export const DEC_RATIO_UPDATE_COFFEE = 'DEC_RATIO_UPDATE_COFFEE'

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