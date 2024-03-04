function quickSort(arr) {
  const n = arr.length;
  if (n < 2) return arr;
  const pivot = arr[0];
  const [leftArr, rightArr] = [[], []];
  for (let i = 1; i < n; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else if (pivot < arr[i]) {
      rightArr.push(arr[i]);
    }
  }
  return [...leftArr, pivot, ...rightArr];
}
