/* HELPER FUNCTIONS */

// inc :: Number -> Number -> Number
function inc(val, step) {
  return (val * 10 + step) / 10
}

// dec :: Number -> Number -> Number
function dec(val, step) {
  return (val * 10 - step) / 10
}


/* EXPORTED FUNCTIONS */

// ouncesToGrams :: Number -> Number
export function ouncesToGrams(val) {
  return +(val * 283495 / 10000).toFixed(1)
}

// gramsToOunces :: Number -> Number
export function gramsToOunces(val) {
  return +(val * 35274 / 1000000).toFixed(1)
}

// incVal :: String -> String -> Number -> Number
export function incVal(ingredient, unit, val) {
  return ingredient === 'coffee' ?
    unit === 'g' ? inc(val, 1) : inc(val, ouncesToGrams(0.1) * 10) :
    unit === 'g' ? inc(val, 10) : +(inc(val, ouncesToGrams(0.1) * 10)).toFixed()
}

// decVal :: String -> String -> Number -> Number
export function decVal(ingredient, unit, val) {
  return ingredient === 'coffee' ?
    unit === 'g' ? dec(val, 1) : dec(val, ouncesToGrams(0.1) * 10) :
    unit === 'g' ? dec(val, 10) : +(dec(val, ouncesToGrams(0.1) * 10)).toFixed()
}

// calcCoffee :: Number -> Number -> Number
export function calcCoffee(water, ratio) {
  return +(water / ratio).toFixed(1)
}

// calcWater :: Number -> Number -> Number
export function calcWater(coffee, ratio) {
  return +(coffee * ratio).toFixed()
}
