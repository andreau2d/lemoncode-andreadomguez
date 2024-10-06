function clone(source) {
    return {...source};
  }

function merge(source, target) { 
  const sourceCloned = clone(source);
  const targetCloned = clone(target);
  return {... targetCloned, ...sourceCloned}; //se añade primero target para darle prioridad al array source
}