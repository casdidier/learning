function strCount(str, letter) {
  return str.split('').filter(x => x === letter).length;
}

// shortest version
function strCount(str, letter){
  return str.split(letter).length-1
}