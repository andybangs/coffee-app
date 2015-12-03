import { INC_WATER, DEC_WATER, SET_WATER, INC_RATIO_UPDATE_COFFEE, DEC_RATIO_UPDATE_COFFEE } from '../actions/water'
import { INC_COFFEE, DEC_COFFEE, SET_COFFEE, INC_RATIO_UPDATE_WATER, DEC_RATIO_UPDATE_WATER } from '../actions/coffee'

const initialState = {
  coffee: 42,
  water: 672,
  ratio: 16
}

export default function recipe(state = initialState, action) {
  switch (action.type) {
    case INC_WATER:
      const waterInc = state.water + 1
      return Object.assign({}, state, { coffee: +(waterInc / state.ratio).toFixed(1), water: waterInc })
    case DEC_WATER:
      if (state.water < 1) return state
      const waterDec = state.water - 1
      return Object.assign({}, state, { coffee: +(waterDec / state.ratio).toFixed(1), water: waterDec })
    case SET_WATER:
      if (action.water < 0) return state
      return Object.assign({}, state, { coffee: +(+action.water / state.ratio).toFixed(1), water: +action.water })
    case INC_RATIO_UPDATE_COFFEE:
      if (state.ratio > 19) return state
      const ratioIncUC = state.ratio + 1
      return Object.assign({}, state, { coffee: +(state.water / ratioIncUC).toFixed(1), ratio: ratioIncUC })
    case DEC_RATIO_UPDATE_COFFEE:
      if (state.ratio < 11) return state
      const ratioDecUC = state.ratio - 1
      return Object.assign({}, state, { coffee: +(state.water / ratioDecUC).toFixed(1), ratio: ratioDecUC })

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
