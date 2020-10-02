
exports.min = function min (array) {
  if ((typeof array == "undefined") || (array.length == 0)) { 
    return 0;
  } else {
    let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
       min = array[i];
    }
}
return min;
}
}

exports.max = function max (array) {
  if ((typeof array == "undefined") || (array.length == 0)) { 
    return 0;
  } else {
    let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
       max = array[i];
    }
}
return max;
  }
}

exports.avg = function avg (array) {
  if ((typeof array == "undefined") || (array.length == 0)) { 
    return 0;
  } else {
  let average = array.reduce((sum, current) => sum + current, 0) / array.length;
  if (isNaN(average)) {
    return 0;
  } else {
    return average;
  }
  }
}
