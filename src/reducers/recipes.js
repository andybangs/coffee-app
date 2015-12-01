import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE, FAVORITE_RECIPE } from '../actions/recipes'

const initialState = [
  {
    id: 1,
    title: 'Chemex',
    url: 'https://www.stumptowncoffee.com/brew-guides/chemex',
    source: 'Stumptown Brew Guide',
    notes: 'Yield should be 20oz (bubble on 8-cup Chemex) – Drain remainder in sink at 4 minutes',
    coffee: 42,
    water: 700,
    grind: 21,
    time: 4,
    isFavorite: true
  },
  {
    id: 2,
    title: 'Hario V60',
    url: 'https://www.stumptowncoffee.com/brew-guides/v60',
    source: 'Stumptown Brew Guide',
    notes: '',
    coffee: 21,
    water: 360,
    grind: 18,
    time: 3,
    isFavorite: false
  },
  {
    id: 3,
    title: 'Kalita Wave',
    url: 'https://www.stumptowncoffee.com/brew-guides/chemex',
    source: 'Stumptown Brew Guide',
    notes: 'Yield should be 20oz (bubble on 8-cup Chemex) – Drain remainder in sink at 4 minutes',
    coffee: 42,
    water: 700,
    grind: 21,
    time: 4,
    isFavorite: true
  },
  {
    id: 4,
    title: 'Aeropress',
    url: 'https://www.stumptowncoffee.com/brew-guides/v60',
    source: 'Stumptown Brew Guide',
    notes: '',
    coffee: 21,
    water: 360,
    grind: 18,
    time: 3,
    isFavorite: false
  },
  {
    id: 5,
    title: 'Presspot',
    url: 'https://www.stumptowncoffee.com/brew-guides/chemex',
    source: 'Stumptown Brew Guide',
    notes: 'Yield should be 20oz (bubble on 8-cup Chemex) – Drain remainder in sink at 4 minutes',
    coffee: 42,
    water: 700,
    grind: 21,
    time: 4,
    isFavorite: true
  },
]

// TODO: Implement recipes reducer
export default function recipes(state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return
    case DELETE_RECIPE:
      return
    case EDIT_RECIPE:
      return
    case FAVORITE_RECIPE:
      return
    default:
      return state
  }
}
