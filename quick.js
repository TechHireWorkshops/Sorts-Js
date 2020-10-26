function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const rand = Math.floor(Math.random() * arr.length);
  const pivot = arr.splice(rand, 1)[0];
  const left = arr.filter(function (item) {
    return item <= pivot;
  });
  const right = arr.filter(function (item) {
    return item > pivot;
  });
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([1, 8, 16, 4, -6, 10, -80]))
