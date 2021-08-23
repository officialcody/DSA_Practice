function bubbleSort(array) {
  for(let i=0;i<array.length;i++){
    for(let j=1;j<array.length - i;j++){
      if(array[j] < array[j - 1]){
        swap(array, j, j-1);
      }
    }
  }
  return array;
}

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(bubbleSort([8,1,2,5,4,7,6,3,2,5,9]))