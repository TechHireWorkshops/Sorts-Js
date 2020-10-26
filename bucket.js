function bucketSort(array, bucketSize = 5) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let allBuckets = [];
  let sortedArray = [];

  if (array.length < 2) {
    return array;
  }

  let bucketCount = Math.floor((max - min) / bucketSize) + 1;

  for (let i = 0; i < bucketCount; i++) {
    allBuckets[i] = [];
  }

  array.forEach(currentVal => {
    allBuckets[Math.floor((currentVal - min) / bucketSize)].push(currentVal);
  });

  allBuckets.forEach(bucket => {
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


