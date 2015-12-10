import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/recipe'
import { isInGrams, gramsToOunces, ouncesToGrams } from '../util/math'

const initialState = {
  coffee: { value: 42, unit: 'g' },
  water: { value: 672, unit: 'g' },
  ratio: 16
}

// calcCoffee :: String -> Number -> Number -> Number
function calcCoffee(coffeeUnit, water, ratio) {
  const coffeeVal = +(water / ratio).toFixed(1)
  return isInGrams(coffeeUnit) ? coffeeVal : gramsToOunces(coffeeVal)
}

// calcWater :: String -> Number -> Number -> Number
function calcWater(waterUnit, coffee, ratio) {
  const waterVal = Math.round(coffee * ratio)
  return isInGrams(waterUnit) ? waterVal : gramsToOunces(waterVal)
}

// incVal :: String -> Number -> Number
function incVal(unit, val) {
  return (val * 10 + 1) / 10
}

// decVal :: String -> Number -> Number
function decVal(unit, val) {
  return (val * 10 - 1) / 10
}

// convertVal :: String -> Number -> Number
function convertVal(unit, val) {
  return isInGrams(unit) ? gramsToOunces(val) : ouncesToGrams(val)
}

// toggleUnit :: String -> String
function toggleUnit(unit) {
  return unit === 'g' ? 'oz' : 'g'
}

// updateCoffee :: String -> String -> Number -> Number -> Number
function updateCoffee(coffeeUnit, waterUnit, water, ratio) {
  return isInGrams(waterUnit) ?
    calcCoffee(coffeeUnit, water, ratio) :
    calcCoffee(coffeeUnit, ouncesToGrams(water), ratio)
}

// updateWater :: String -> String -> Number -> Number -> Number
function updateWater(waterUnit, coffeeUnit, coffee, ratio) {
  return isInGrams(coffeeUnit) ?
    calcWater(waterUnit, coffee, ratio) :
    calcWater(waterUnit, ouncesToGrams(coffee), ratio)
}

export default function recipe(state = initialState, action) {
  const { coffee, water, ratio } = state
  const { ingredient, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      newVal = incVal(state[ingredient].unit, state[ingredient].value)

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            value: updateCoffee(coffee.unit, water.unit, newVal, ratio),
            unit: coffee.unit
          },
          water: {
            value: newVal,
            unit: water.unit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            value: newVal,
            unit: coffee.unit
          },
          water: {
            value: updateWater(water.unit, coffee.unit, newVal, ratio),
            unit: water.unit
          }
        })

    case DEC_VAL:
      if (state.water < 1) return state

      newVal = decVal(state[ingredient].unit, state[ingredient].value)

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            value: updateCoffee(coffee.unit, water.unit, newVal, ratio),
            unit: coffee.unit
          },
          water: {
            value: newVal,
            unit: water.unit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            value: newVal,
            unit: coffee.unit
          },
          water: {
            value: updateWater(water.unit, coffee.unit, newVal, ratio),
            unit: water.unit
          }
        })

    case SET_VAL:
      if (action.val < 0) return state

      return ingredient === 'water' ?
        Object.assign({}, state, {
          coffee: {
            value: updateCoffee(coffee.unit, water.unit, action.val, ratio),
            unit: coffee.unit
          },
          water: {
            value: +action.val,
            unit: water.unit
          }
        }) :
        Object.assign({}, state, {
          coffee: {
            value: +action.val,
            unit: coffee.unit
          },
          water: {
            value: updateWater(water.unit, coffee.unit, +action.val, ratio),
            unit: water.unit
          }
        })

    case INC_RATIO:
      if (ratio > 19) return state

      newVal = ratio + 1

      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            value: updateCoffee(coffee.unit, water.unit, water.value, newVal),
            unit: coffee.unit
          },
          ratio: newVal
        }) :
        Object.assign({}, state, {
          water: {
            value: updateWater(water.unit, coffee.unit, coffee.value, newVal),
            unit: water.unit
          },
          ratio: newVal
        })

    case DEC_RATIO:
      if (ratio < 11) return state

      newVal = ratio - 1

      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            value: updateCoffee(coffee.unit, water.unit, water.value, newVal),
            unit: coffee.unit
          },
          ratio: newVal
        }) :
        Object.assign({}, state, {
          water: {
            value: updateWater(water.unit, coffee.unit, coffee.value, newVal),
            unit: water.unit
          },
          ratio: newVal
        })

    case TOGGLE_UNIT:
      return toBeUpdated === 'coffee' ?
        Object.assign({}, state, {
          coffee: {
            value: convertVal(coffee.unit, coffee.value),
            unit: toggleUnit(coffee.unit)
          }
        }) :
        Object.assign({}, state, {
          water: {
            value: convertVal(water.unit, water.value),
            unit: toggleUnit(water.unit)
          }
        })

    default:
      return state
  }
}
