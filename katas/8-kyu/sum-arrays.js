function arrayPlusArray(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
