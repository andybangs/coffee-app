import { INC_VAL, DEC_VAL, SET_VAL, INC_RATIO, DEC_RATIO } from '../constants/recipe'
import { EDIT_METHOD_TITLE } from '../constants/title'
import { ADD_METHOD, DELETE_METHOD } from '../constants/method'
import { RESET_RECIPE, EDIT_METHOD_RECIPE } from '../constants/methods'
import recipe from './recipe'
import title from './title'
import method from './method'

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

    case EDIT_METHOD_TITLE:
      return state.map((method, index) => title({ method, index }, action))

    case ADD_METHOD:
      return method(state, action)

    case DELETE_METHOD:
      return method(state, action)

    case RESET_RECIPE:
      return state.map((method, index) => {
        if (method.title !== action.title) {
          return method
        }

        return initialState[index]
      })

    case EDIT_METHOD_RECIPE:
      initialState[action.index] = state[action.index]
      return state

    default:
      return state
  }
}
