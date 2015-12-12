import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/recipe'
import { isInGrams, gramsToOunces, ouncesToGrams } from '../util/math'

const initialState = {
  coffee: {
    valueInGrams: 42,
    displayUnit: 'g'
  },
  water: {
    valueInGrams: 672,
    displayUnit: 'g'
  },
  ratio: 16
}

// calcCoffee :: Number -> Number -> Number
function calcCoffee(water, ratio) {
  return +(water / ratio).toFixed(1)
}

// calcWater :: String -> Number -> Number -> Number
function calcWater(coffee, ratio) {
  return Math.round(coffee * ratio)
}

// incVal :: Number -> Number
function incVal(val) {
  return (val * 10 + 1) / 10
}

// decVal :: String -> Number -> Number
function decVal(val) {
  return (val * 10 - 1) / 10
}

// toggleUnit :: String -> String
function toggleUnit(displayUnit) {
  return displayUnit === 'g' ? 'oz' : 'g'
}

export default function recipe(state = initialState, action) {
  const { coffee, water, ratio } = state
  const { ingredient, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      newVal = incVal(state[ingredient].valueInGrams)

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: calcCoffee(newVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: newVal,
            displayUnit: water.displayUnit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            valueInGrams: newVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(newVal, ratio),
            displayUnit: water.displayUnit
          }
        })

    case DEC_VAL:
      if (state.water < 1) return state

      newVal = decVal(state[ingredient].valueInGrams)

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: calcCoffee(newVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: newVal,
            displayUnit: water.displayUnit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            valueInGrams: newVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(newVal, ratio),
            displayUnit: water.displayUnit
          }
        })

    case SET_VAL:
      if (action.val < 0) return state

      let convertedVal = state[ingredient].displayUnit === 'g' ?
        action.val :
        ouncesToGrams(action.val)

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: calcCoffee(convertedVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: +convertedVal,
            displayUnit: water.displayUnit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            valueInGrams: +convertedVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(+convertedVal, ratio),
            displayUnit: water.displayUnit
          }
        })

    case INC_RATIO:
      if (ratio > 19) return state

      newVal = ratio + 1

      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: calcCoffee(water.valueInGrams, newVal),
            displayUnit: coffee.displayUnit
          },
          ratio: newVal
        }) :
        Object.assign({}, state, {
          water: {
            valueInGrams: calcWater(coffee.valueInGrams, newVal),
            displayUnit: water.displayUnit
          },
          ratio: newVal
        })

    case DEC_RATIO:
      if (ratio < 11) return state

      newVal = ratio - 1

      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: calcCoffee(water.valueInGrams, newVal),
            displayUnit: coffee.displayUnit
          },
          ratio: newVal
        }) :
        Object.assign({}, state, {
          water: {
            valueInGrams: calcWater(coffee.valueInGrams, newVal),
            displayUnit: water.displayUnit
          },
          ratio: newVal
        })

    case TOGGLE_UNIT:
      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            valueInGrams: coffee.valueInGrams,
            displayUnit: toggleUnit(coffee.displayUnit)
          }
        }) :
        Object.assign({}, state, {
          water: {
            valueInGrams: water.valueInGrams,
            displayUnit: toggleUnit(water.displayUnit)
          }
        })

    default:
      return state
  }
}
