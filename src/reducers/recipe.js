import { INC_WATER, DEC_WATER, SET_WATER, INC_RATIO_UPDATE_COFFEE, DEC_RATIO_UPDATE_COFFEE, TOGGLE_UNIT_UPDATE_WATER } from '../actions/water'
import { INC_COFFEE, DEC_COFFEE, SET_COFFEE, INC_RATIO_UPDATE_WATER, DEC_RATIO_UPDATE_WATER } from '../actions/coffee'

const initialState = {
  coffee: { value: 42, unit: 'g' },
  water: { value: 672, unit: 'g' },
  ratio: 16
}

// isInGrams :: String -> String
function isInGrams(val) {
  return val === 'g'
}

// gramsToOunces :: Number -> Number
function gramsToOunces(val) {
  return +(val * 35274 / 1000000).toFixed(1)
}

// ouncesToGrams :: Number -> Number
function ouncesToGrams(val) {
  return +(val * 283495 / 10000).toFixed()
}

// calcCoffee :: Number -> Number
function calcCoffee(water, ratio) {
  return +(water / ratio).toFixed(1)
}

// toggleUnit :: String -> String
function toggleUnit(unit) {
  return unit === 'g' ? 'oz' : 'g'
}

////

function updateCoffee(unit, water, ratio) {
  return isInGrams(unit) ?
    calcCoffee(water, ratio) :
    calcCoffee(ouncesToGrams(water), ratio)
}

function incWater(unit, water) {
  return isInGrams(unit) ? water + 1 : (water * 10 + 1) / 10
}

function decWater(unit, water) {
  return isInGrams(unit) ? water - 1 : (water * 10 - 1) / 10
}

function convertValue(unit, val) {
  return isInGrams(unit) ? gramsToOunces(val) : ouncesToGrams(val)
}

export default function recipe(state = initialState, action) {
  const { coffee, water, ratio } = state
  let newCoffee, newWater, newRatio

  switch (action.type) {
    case INC_WATER:
      newWater = incWater(water.unit, water.value)

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(water.unit, newWater, ratio),
          unit: coffee.unit
        },
        water: {
          value: newWater,
          unit: water.unit
        }
      })

    case DEC_WATER:
      if (state.water < 1) return state

      newWater = decWater(water.unit, water.value)

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(water.unit, newWater, ratio),
          unit: coffee.unit
        },
        water: {
          value: newWater,
          unit: water.unit
        }
      })

    case SET_WATER:
      if (action.water < 0) return state

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(water.unit, action.water, ratio),
          unit: coffee.unit
        },
        water: {
          value: +action.water,
          unit: water.unit
        }
      })

    case INC_RATIO_UPDATE_COFFEE:
      if (ratio > 19) return state

      newRatio = ratio + 1

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(water.unit, water.value, newRatio),
          unit: coffee.unit
        },
        ratio: newRatio
      })

    case DEC_RATIO_UPDATE_COFFEE:
      if (ratio < 11) return state

      newRatio = ratio - 1

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(water.unit, water.value, newRatio),
          unit: coffee.unit
        },
        ratio: newRatio
      })

    case TOGGLE_UNIT_UPDATE_WATER:
      return Object.assign({}, state, {
        water: {
          value: convertValue(water.unit, water.value),
          unit: toggleUnit(water.unit)
        }
      })

    case INC_COFFEE:
      const coffeeInc = (state.coffee * 10 + 1) / 10
      return Object.assign({}, state, { coffee: coffeeInc, water: Math.round(coffeeInc * state.ratio) })
    case DEC_COFFEE:
      if (state.coffee < 1) return state
      const coffeeDec = (state.coffee * 10 - 1) / 10
      return Object.assign({}, state, { coffee: coffeeDec, water: Math.round(coffeeDec * state.ratio) })
    case SET_COFFEE:
      if (action.coffee < 0) return state
      return Object.assign({}, state, { coffee: +action.coffee, water: Math.round(+action.coffee * state.ratio) })
    case INC_RATIO_UPDATE_WATER:
      if (state.ratio > 19) return state
      const ratioIncUW = state.ratio + 1
      return Object.assign({}, state, { water: Math.round(state.coffee * ratioIncUW), ratio: ratioIncUW })
    case DEC_RATIO_UPDATE_WATER:
      if (state.ratio < 11) return state
      const ratioDecUW = state.ratio - 1
      return Object.assign({}, state, { water: Math.round(state.coffee * ratioDecUW), ratio: ratioDecUW })

    default:
      return state
  }
}
