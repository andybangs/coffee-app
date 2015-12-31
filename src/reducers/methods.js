import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO } from '../constants/recipe'
import { RESET_RECIPE, EDIT_INITIAL_RECIPE } from '../constants/initialRecipe'
import { EDIT_METHOD_TITLE } from '../constants/title'
import { ADD_METHOD, DELETE_METHOD } from '../constants/method'
import recipe from './methods/recipe'
import initialRecipe from './methods/initialRecipe'
import title from './methods/title'
import method from './methods/method'

const initialState = [
  {
    title: "AeroPress",
    recipe: {
      coffee: 18,
      water: 270,
      ratio: 15
    },
    initialRecipe: {
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
    },
    initialRecipe: {
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
    },
    initialRecipe: {
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
    },
    initialRecipe: {
      coffee: 22,
      water: 352,
      ratio: 16
    }
  }
]

export default function methods(state = initialState, action) {
  switch (action.type) {
    case INC_VAL:
      return state.map(method => recipe(method, action))

    case DEC_VAL:
      return state.map(method => recipe(method, action))

    case SET_VAL:
      return state.map(method => recipe(method, action))

    case INC_RATIO:
      return state.map(method => recipe(method, action))

    case DEC_RATIO:
      return state.map(method => recipe(method, action))

    case RESET_RECIPE:
      return state.map((method, index) => initialRecipe({ method, index }, action))

    case EDIT_INITIAL_RECIPE:
      return state.map((method, index) => initialRecipe({ method, index }, action))

    case EDIT_METHOD_TITLE:
      return state.map((method, index) => title({ method, index }, action))

    case ADD_METHOD:
      return method(state, action)

    case DELETE_METHOD:
      return method(state, action)

    default:
      return state
  }
}
