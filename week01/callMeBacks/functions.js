const identity = function (i) {
     return i
};

const first = function (arr, index) {
 if (index === undefined) {
  return arr[0]
 }
 if (index === 0) {
  return []
 }
 if (index >= arr.length) {
  return arr
 }
 return arr.slice(0,index)
};
  
const last = function (arr, index = 0) {
  if (index === 0) {
    return [];
  }
  if (index >= arr.length) {
    return arr;
  }
  return arr.slice(arr.length - index);
};

const each = function (animals, callback) {
  if (Array.isArray(animals)) {
    for (let i = 0; i < animals.length; i++) {
      callback(animals[i], i, animals);
    }
  }else if (typeof animals === 'object' && animals !== null) {
    for (let key in animals) {
      if (animals.hasOwnProerty(key)) {
        callback(animals[key], key, animals)
      }
    }
  }
};

const indexOf = function(arr, searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  }

  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i; 
    }
  }

  return -1; 
};

const map = function (arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr))
  }
  return result
}

const filter = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (collection) =>{
  let result = []
  for (let item of collection){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};
