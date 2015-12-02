export const INC_WATER = 'INC_WATER'
export const DEC_WATER = 'DEC_WATER'
export const SET_WATER = 'SET_WATER'
export const INC_RATIO = 'INC_RATIO'
export const DEC_RATIO = 'DEC_RATIO'

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
    type: INC_RATIO
  }
}

export function decRatio() {
  return {
    type: DEC_RATIO
  }
}
