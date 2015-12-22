import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO, RESET_RECIPE, EDIT_METHOD_TITLE, EDIT_METHOD_RECIPE, DELETE_METHOD } from '../constants/methods'
import { ouncesToGrams } from '../util/math'

const initialState = [
  {
    title: "AeroPress",
    recipe: {
      coffee: 18,
      water: 270,
      ratio: 15
    }
  },
  {
    title: "Chemex",
    recipe: {
      coffee: 42,
      water: 672,
      ratio: 16
    }
  },
  {
    title: "Clever Dripper",
    recipe: {
      coffee: 20,
      water: 300,
      ratio: 15
    }
  },
  {
    title: "Hario V60",
    recipe: {
      coffee: 22,
      water: 352,
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

export default function methods(state = initialState, action) {
  const { title, ingredient, unit, val, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      return state.map(method => {
        if (method.title !== title) {
          return method
        }

        newVal = incVal(ingredient, unit, method.recipe[ingredient])

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: calcCoffee(newVal, method.recipe.ratio),
              water: newVal,
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: newVal,
              water: calcWater(newVal, method.recipe.ratio)
            }
          }
      })

    case DEC_VAL:
      return state.map(method => {
        if (method.title !== title) {
          return method
        }

        if (method.recipe[ingredient] <= 0) return method

        newVal = decVal(ingredient, unit, method.recipe[ingredient])

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: calcCoffee(newVal, method.recipe.ratio),
              water: newVal,
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: newVal,
              water: calcWater(newVal, method.recipe.ratio)
            }
          }
      })

    case SET_VAL:
      return state.map(method => {
        if (method.title !== title) {
          return method
        }

        if (val < 0) return method

        newVal = unit === 'g' ? +val : +(ouncesToGrams(val)).toFixed()

        return ingredient === 'water' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: calcCoffee(newVal, method.recipe.ratio),
              water: newVal,
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: newVal,
              water: calcWater(newVal, method.recipe.ratio)
            }
          }
      })

    case INC_RATIO:
      return state.map(method => {
        if (method.title !== title) {
          return method
        }

        if (method.recipe.ratio > 19) return method

        newVal = (method.recipe.ratio * 10 + 5) / 10

        return toBeUpdated === 'coffee' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: calcCoffee(method.recipe.water, newVal),
              ratio: newVal
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              water: calcWater(method.recipe.coffee, newVal),
              ratio: newVal
            }
          }
      })

    case DEC_RATIO:
      return state.map(method => {
        if (method.title !== title) {
          return method
        }

        if (method.recipe.ratio < 11) return method

        newVal = (method.recipe.ratio * 10 - 5) / 10

        return toBeUpdated === 'coffee' ?
          {
            ...method,
            recipe: {
              ...method.recipe,
              coffee: calcCoffee(method.recipe.water, newVal),
              ratio: newVal
            }
          } :
          {
            ...method,
            recipe: {
              ...method.recipe,
              water: calcWater(method.recipe.coffee, newVal),
              ratio: newVal
            }
          }
      })

    case RESET_RECIPE:
      return state.map((method, index) => {
        if (method.title !== title) {
          return method
        }

        return initialState[index]
      })

    case EDIT_METHOD_TITLE:
      return state.map((method, index) => {
        if (index !== action.index) {
          return method
        }

        return {
          ...method,
          title: action.title
        }
      })

    case EDIT_METHOD_RECIPE:
      initialState[action.index] = state[action.index]
      return state

    case DELETE_METHOD:
      if (state.length <= 1) return state
      return state.filter((method, index) => index !== action.index)

    default:
      return state
  }
}
