function selectionSort(array) {
  let i, j, min_idx;
  let n = array.length
  for (i = 0; i < n-1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (array[j] < array[min_idx]){
        min_idx = j;
      }
    }
    swap(array,min_idx, i);
  }
  return array;
}

function swap(arr,xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

console.log(selectionSort([4,1,5,8,1,2,3,9,1,3,4,5,0,7]))