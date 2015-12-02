import { INC_WATER, DEC_WATER, SET_WATER, INC_RATIO, DEC_RATIO } from '../actions/recipe'

const initialState = {
  coffee: 42,
  water: 672,
  ratio: 16
}

export default function recipe(state = initialState, action) {
  switch (action.type) {
    case INC_WATER:
      const waterInc = state.water + 1
      return Object.assign({}, state, { coffee: waterInc / state.ratio, water: waterInc })
    case DEC_WATER:
      if (state.water < 1) return state
      const waterDec = state.water - 1
      return Object.assign({}, state, { coffee: waterDec / state.ratio, water: waterDec })
    case SET_WATER:
      if (action.water < 0) return state
      return Object.assign({}, state, { coffee: +action.water / state.ratio, water: +action.water })
    case INC_RATIO:
      if (state.ratio > 19) return state
      const ratioInc = state.ratio + 1
      return Object.assign({}, state, { coffee: state.water / ratioInc, ratio: ratioInc })
    case DEC_RATIO:
      if (state.ratio < 11) return state
      const ratioDec = state.ratio - 1
      return Object.assign({}, state, { coffee: state.water / ratioDec, ratio: ratioDec })
    default:
      return state
  }
}
