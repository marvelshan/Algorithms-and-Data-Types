function partition(arr, start, end) {
  const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

  const pivot = arr[start];
  let firstRightIndex = start + 1;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, firstRightIndex);
      firstRightIndex += 1;
    }
  }
  const lastLeftIndex = firstRightIndex - 1;
  swap(arr, start, lastLeftIndex);

  return lastLeftIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pivotIndex = partition(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}
