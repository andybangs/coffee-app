import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, TOGGLE_UNIT } from '../constants/recipe'
import { gramsToOunces, ouncesToGrams } from '../util/math'

const initialState = [
  {
    title: "Aeropress",
    recipe: {
      coffee: {
        valueInGrams: 18,
        displayUnit: 'g'
      },
      water: {
        valueInGrams: 270,
        displayUnit: 'g'
      },
      ratio: 15
    }
  },
  {
    title: "Chemex",
    recipe: {
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
  },
  {
    title: "V60",
    recipe: {
      coffee: {
        valueInGrams: 22,
        displayUnit: 'g'
      },
      water: {
        valueInGrams: 352,
        displayUnit: 'g'
      },
      ratio: 16
    }
  }
]

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
  const { title, ingredient, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        newVal = incVal(ingredient, method.recipe[ingredient].displayUnit, method.recipe[ingredient].valueInGrams)

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: calcCoffee(newVal, method.recipe.ratio),
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: newVal,
                displayUnit: method.recipe.water.displayUnit
              }
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: newVal,
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: calcWater(convertedVal, method.recipe.ratio),
                displayUnit: method.recipe.water.displayUnit
              }
            }
          }
      })

    case DEC_VAL:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        if (method.recipe[ingredient].valueInGrams < 0) return method

        newVal = decVal(ingredient, method.recipe[ingredient].displayUnit, method.recipe[ingredient].valueInGrams)

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: calcCoffee(newVal, method.recipe.ratio),
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: newVal,
                displayUnit: method.recipe.water.displayUnit
              }
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: newVal,
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: calcWater(convertedVal, method.recipe.ratio),
                displayUnit: method.recipe.water.displayUnit
              }
            }
          }
      })

    case SET_VAL:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        if (action.val < 0) return method

        let convertedVal = method.recipe[ingredient].displayUnit === 'g' ?
          +action.val :
          +(ouncesToGrams(action.val)).toFixed()

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: calcCoffee(convertedVal, method.recipe.ratio),
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: convertedVal,
                displayUnit: method.recipe.water.displayUnit
              }
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: convertedVal,
                displayUnit: method.recipe.coffee.displayUnit
              },
              water: {
                valueInGrams: calcWater(convertedVal, method.recipe.ratio),
                displayUnit: method.recipe.water.displayUnit
              }
            }
          }
      })

    case INC_RATIO:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        if (method.recipe.ratio > 19) return method

        newVal = (method.recipe.ratio * 10 + 5) / 10

        return toBeUpdated === 'coffee' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: calcCoffee(method.recipe.water.valueInGrams, newVal),
                displayUnit: method.recipe.coffee.displayUnit
              },
              ratio: newVal
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              water: {
                valueInGrams: calcWater(method.recipe.coffee.valueInGrams, newVal),
                displayUnit: method.recipe.water.displayUnit
              },
              ratio: newVal
            }
          }
      })

    case DEC_RATIO:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        if (method.recipe.ratio < 11) return method

        newVal = (method.recipe.ratio * 10 - 5) / 10

        return toBeUpdated === 'coffee' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: calcCoffee(method.recipe.water.valueInGrams, newVal),
                displayUnit: method.recipe.coffee.displayUnit
              },
              ratio: newVal
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              water: {
                valueInGrams: calcWater(method.recipe.coffee.valueInGrams, newVal),
                displayUnit: method.recipe.water.displayUnit
              },
              ratio: newVal
            }
          }
      })

    case TOGGLE_UNIT:
      return state.map(method => {
        if (method.title !== action.title) {
          return method
        }

        return action.ingredient === 'coffee' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: {
                valueInGrams: method.recipe.coffee.valueInGrams,
                displayUnit: toggleUnit(method.recipe.coffee.displayUnit)
              }
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              water: {
                valueInGrams: method.recipe.water.valueInGrams,
                displayUnit: toggleUnit(method.recipe.water.displayUnit)
              }
            }
          }
      })

    default:
      return state
  }
}
