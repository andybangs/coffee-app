export const INC_COFFEE = 'INC_COFFEE'
export const DEC_COFFEE = 'DEC_COFFEE'
export const SET_COFFEE = 'SET_COFFEE'
export const INC_RATIO_UPDATE_WATER = 'INC_RATIO_UPDATE_WATER'
export const DEC_RATIO_UPDATE_WATER = 'DEC_RATIO_UPDATE_WATER'

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
