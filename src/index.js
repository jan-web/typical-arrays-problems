
exports.min = function min (array = []) {
  if(array.length === 0) {

    return 0;
  }

  return Math.min.apply(null, array);
}

exports.max = function max (array = []) {
  if(array.length === 0) {

    return 0;
  }

  return Math.max.apply(null, array);
}

exports.avg = function avg (array = []) {
  if(array.length === 0) {

    return 0;
  }

  const sum = array.reduce((acc, elem)=> {
    return acc+elem;
  }, 0);
  const aver = sum / (array.length);

  return aver;
}
