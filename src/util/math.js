// isInGrams :: String -> String
export function isInGrams(val) {
  return val === 'g'
}

// gramsToOunces :: Number -> Number
export function gramsToOunces(val) {
  return +(val * 35274 / 1000000).toFixed(1)
}

// ouncesToGrams :: Number -> Number
export function ouncesToGrams(val) {
  return +(val * 283495 / 10000).toFixed(1)
}
