const concat = (a, b) => {
   return [...a, ...b]
}

const optionalConcat = ( ...arrays) => {
  return arrays.reduce((result, array) => [...result, ...array], []);
}
