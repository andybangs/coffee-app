import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/recipe'
import { gramsToOunces, ouncesToGrams } from '../util/math'

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

// calcWater :: Number -> Number -> Number
function calcWater(coffee, ratio) {
  return +(coffee * ratio).toFixed()
}

// inc :: Number -> Number -> Number
function inc(val, step) {
  return (val * 10 + step) / 10
}

// dec :: Number -> Number -> Number
function dec(val, step) {
  return (val * 10 - step) / 10
}

// incVal :: String -> String -> Number -> Number
function incVal(ingredient, unit, val) {
  return ingredient === 'coffee' ?
    unit === 'g' ? inc(val, 1) : inc(val, ouncesToGrams(0.1) * 10) :
    unit === 'g' ? inc(val, 10) : +(inc(val, ouncesToGrams(0.1) * 10)).toFixed()
}

// decVal :: String -> String -> Number -> Number
function decVal(ingredient, unit, val) {
  return ingredient === 'coffee' ?
    unit === 'g' ? dec(val, 1) : dec(val, ouncesToGrams(0.1) * 10) :
    unit === 'g' ? dec(val, 10) : +(dec(val, ouncesToGrams(0.1) * 10)).toFixed()
}

// toggleUnit :: String -> String
function toggleUnit(unit) {
  return unit === 'g' ? 'oz' : 'g'
}

export default function recipe(state = initialState, action) {
  const { coffee, water, ratio } = state
  const { ingredient, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      newVal = incVal(ingredient, state[ingredient].displayUnit, state[ingredient].valueInGrams)

      return ingredient === 'water' ?
        {
          ...state,
          coffee: {
            valueInGrams: calcCoffee(newVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: newVal,
            displayUnit: water.displayUnit
          }
        } :
        {
          ...state,
          coffee: {
            valueInGrams: newVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(newVal, ratio),
            displayUnit: water.displayUnit
          }
        }

    case DEC_VAL:
      if (state.water < 1) return state

      newVal = decVal(ingredient, state[ingredient].displayUnit, state[ingredient].valueInGrams)

      return ingredient === 'water' ?
        {
          ...state,
          coffee: {
            valueInGrams: calcCoffee(newVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: newVal,
            displayUnit: water.displayUnit
          }
        } :
        {
          ...state,
          coffee: {
            valueInGrams: newVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(newVal, ratio),
            displayUnit: water.displayUnit
          }
        }

    case SET_VAL:
      if (action.val < 0) return state

      let convertedVal = state[ingredient].displayUnit === 'g' ?
        action.val :
        +(ouncesToGrams(action.val)).toFixed()

      return ingredient === 'water' ?
        {
          ...state,
          coffee: {
            valueInGrams: calcCoffee(convertedVal, ratio),
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: +convertedVal,
            displayUnit: water.displayUnit
          }
        } :
        {
          ...state,
          coffee: {
            valueInGrams: +convertedVal,
            displayUnit: coffee.displayUnit
          },
          water: {
            valueInGrams: calcWater(convertedVal, ratio),
            displayUnit: water.displayUnit
          }
        }

    case INC_RATIO:
      if (ratio > 19) return state

      newVal = (ratio * 10 + 5) / 10

      return toBeUpdated === 'coffee' ?
        {
          ...state,
          coffee: {
            valueInGrams: calcCoffee(water.valueInGrams, newVal),
            displayUnit: coffee.displayUnit
          },
          ratio: newVal
        } :
        {
          ...state,
          water: {
            valueInGrams: calcWater(coffee.valueInGrams, newVal),
            displayUnit: water.displayUnit
          },
          ratio: newVal
        }

    case DEC_RATIO:
      if (ratio < 11) return state

      newVal = (ratio * 10 - 5) / 10

      return toBeUpdated === 'coffee' ?
        {
          ...state,
          coffee: {
            valueInGrams: calcCoffee(water.valueInGrams, newVal),
            displayUnit: coffee.displayUnit
          },
          ratio: newVal
        } :
        {
          ...state,
          water: {
            valueInGrams: calcWater(coffee.valueInGrams, newVal),
            displayUnit: water.displayUnit
          },
          ratio: newVal
        }

    case TOGGLE_UNIT:
      return toBeUpdated === 'coffee' ?
        {
          ...state,
          coffee: {
            valueInGrams: coffee.valueInGrams,
            displayUnit: toggleUnit(coffee.displayUnit)
          }
        } :
        {
          ...state,
          water: {
            valueInGrams: water.valueInGrams,
            displayUnit: toggleUnit(water.displayUnit)
          }
        }

    default:
      return state
  }
}
