import { INC_WATER, DEC_WATER, SET_WATER, INC_RATIO_UPDATE_COFFEE, DEC_RATIO_UPDATE_COFFEE, TOGGLE_UNIT_UPDATE_WATER, TOGGLE_COFFEE_UNIT } from '../actions/water'
import { INC_COFFEE, DEC_COFFEE, SET_COFFEE, INC_RATIO_UPDATE_WATER, DEC_RATIO_UPDATE_WATER, TOGGLE_UNIT_UPDATE_COFFEE, TOGGLE_WATER_UNIT } from '../actions/coffee'

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
  return isInGrams(unit) ? val + 1 : (val * 10 + 1) / 10
}

// decVal :: String -> Number -> Number
function decVal(unit, val) {
  return isInGrams(unit) ? val - 1 : (val * 10 - 1) / 10
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
  let newCoffee, newWater, newRatio

  switch (action.type) {
    case INC_WATER:
      newWater = incVal(water.unit, water.value)

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(coffee.unit, water.unit, newWater, ratio),
          unit: coffee.unit
        },
        water: {
          value: newWater,
          unit: water.unit
        }
      })

    case DEC_WATER:
      if (state.water < 1) return state

      newWater = decVal(water.unit, water.value)

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(coffee.unit, water.unit, newWater, ratio),
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
          value: updateCoffee(coffee.unit, water.unit, action.water, ratio),
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
          value: updateCoffee(coffee.unit, water.unit, water.value, newRatio),
          unit: coffee.unit
        },
        ratio: newRatio
      })

    case DEC_RATIO_UPDATE_COFFEE:
      if (ratio < 11) return state

      newRatio = ratio - 1

      return Object.assign({}, state, {
        coffee: {
          value: updateCoffee(coffee.unit, water.unit, water.value, newRatio),
          unit: coffee.unit
        },
        ratio: newRatio
      })

    case TOGGLE_UNIT_UPDATE_WATER:
      return Object.assign({}, state, {
        water: {
          value: convertVal(water.unit, water.value),
          unit: toggleUnit(water.unit)
        }
      })

    case TOGGLE_COFFEE_UNIT:
      return Object.assign({}, state, {
        coffee: {
          value: convertVal(coffee.unit, coffee.value),
          unit: toggleUnit(coffee.unit)
        }
      })

    ////

    case INC_COFFEE:
      newCoffee = incVal(coffee.unit, coffee.value)

      return Object.assign({}, state, {
        coffee: {
          value: newCoffee,
          unit: coffee.unit
        },
        water: {
          value: updateWater(water.unit, coffee.unit, newCoffee, ratio),
          unit: water.unit
        }
      })

    case DEC_COFFEE:
      if (state.coffee < 1) return state

      newCoffee = decVal(coffee.unit, coffee.value)

      return Object.assign({}, state, {
        coffee: {
          value: newCoffee,
          unit: coffee.unit
        },
        water: {
          value: updateWater(water.unit, coffee.unit, newCoffee, ratio),
          unit: water.unit
        }
      })

    case SET_COFFEE:
      if (action.coffee < 0) return state

      return Object.assign({}, state, {
        coffee: {
          value: +action.coffee,
          unit: coffee.unit
        },
        water: {
          value: updateWater(water.unit, coffee.unit, +action.coffee, ratio),
          unit: water.unit
        }
      })

    case INC_RATIO_UPDATE_WATER:
      if (state.ratio > 19) return state

      newRatio = state.ratio + 1

      return Object.assign({}, state, {
        water: {
          value: updateWater(water.unit, coffee.unit, coffee.value, newRatio),
          unit: water.unit
        },
        ratio: newRatio
      })

    case DEC_RATIO_UPDATE_WATER:
      if (state.ratio < 11) return state

      newRatio = state.ratio - 1

      return Object.assign({}, state, {
        water: {
          value: updateWater(water.unit, coffee.unit, coffee.value, newRatio),
          unit: water.unit
        },
        ratio: newRatio
      })

    case TOGGLE_UNIT_UPDATE_COFFEE:
      return Object.assign({}, state, {
        coffee: {
          value: convertVal(coffee.unit, coffee.value),
          unit: toggleUnit(coffee.unit)
        }
      })

    case TOGGLE_WATER_UNIT:
      return Object.assign({}, state, {
        water: {
          value: convertVal(water.unit, water.value),
          unit: toggleUnit(water.unit)
        }
      })

    default:
      return state
  }
}
