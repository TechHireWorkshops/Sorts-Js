function bucketSort(array, bucketSize = 5) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let bucketContainer = [];
  let sortedArray = [];

  if (array.length < 2) {
    return array;
  }

  let bucketCount = Math.floor((max - min) / bucketSize) + 1;

  for (let i = 0; i < bucketCount; i++) {
    bucketContainer[i] = [];
  }

  array.forEach(currentVal => {
    bucketContainer[Math.floor((currentVal - min) / bucketSize)].push(currentVal);
  });

  bucketContainer.forEach(bucket => {
    insertionSort(bucket);
    bucket.forEach(element => sortedArray.push(element));
  });

  return sortedArray;
}

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  return array;
}
