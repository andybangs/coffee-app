import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO } from '../constants/recipe'
import { ouncesToGrams, incVal, decVal, calcCoffee, calcWater } from '../util/math'

export default function recipe(state, action) {
  const { title, ingredient, unit, val, toBeUpdated } = action
  let newVal

  switch (action.type) {
    case INC_VAL:
      if (state.title !== title) {
        return state
      }

      newVal = incVal(ingredient, unit, state.recipe[ingredient])

      return ingredient === 'water' ?
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: calcCoffee(newVal, state.recipe.ratio),
            water: newVal,
          }
        } :
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: newVal,
            water: calcWater(newVal, state.recipe.ratio)
          }
        }

    case DEC_VAL:
      if (state.title !== title) {
        return state
      }

      if (state.recipe[ingredient] <= 0) return state

      newVal = decVal(ingredient, unit, state.recipe[ingredient])

      return ingredient === 'water' ?
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: calcCoffee(newVal, state.recipe.ratio),
            water: newVal,
          }
        } :
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: newVal,
            water: calcWater(newVal, state.recipe.ratio)
          }
        }

    case SET_VAL:
      if (state.title !== title) {
        return state
      }

      if (val < 0) return state

      newVal = unit === 'g' ? +val : +(ouncesToGrams(val)).toFixed()

      return ingredient === 'water' ?
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: calcCoffee(newVal, state.recipe.ratio),
            water: newVal,
          }
        } :
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: newVal,
            water: calcWater(newVal, state.recipe.ratio)
          }
        }

    case INC_RATIO:
      if (state.title !== title) {
        return state
      }

      if (state.recipe.ratio > 19) return state

      newVal = (state.recipe.ratio * 10 + 5) / 10

      return toBeUpdated === 'coffee' ?
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: calcCoffee(state.recipe.water, newVal),
            ratio: newVal
          }
        } :
        {
          ...state,
          recipe: {
            ...state.recipe,
            water: calcWater(state.recipe.coffee, newVal),
            ratio: newVal
          }
        }

    case DEC_RATIO:
      if (state.title !== title) {
        return state
      }

      if (state.recipe.ratio < 11) return state

      newVal = (state.recipe.ratio * 10 - 5) / 10

      return toBeUpdated === 'coffee' ?
        {
          ...state,
          recipe: {
            ...state.recipe,
            coffee: calcCoffee(state.recipe.water, newVal),
            ratio: newVal
          }
        } :
        {
          ...state,
          recipe: {
            ...state.recipe,
            water: calcWater(state.recipe.coffee, newVal),
            ratio: newVal
          }
        }

    default:
      return state
  }
}
