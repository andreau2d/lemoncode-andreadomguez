const head = ([firstElement, ...arrayRest]) => {
  return firstElement;
};

const tail = ([firstElement, ...arrayRest]) => {
   return arrayRest;
}

const init = (array = []) => {
    return array.slice(0, -1);
}
const last = (array = []) => {
   return [...array].pop();
}

const concat = (a, b) => {
   return [...a, ...b]
}

const optionalConcat = ( ...arrays) => {
  return arrays.reduce((result, array) => [...result, ...array], []);
}