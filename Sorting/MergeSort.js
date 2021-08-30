function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  const length = array.length;
  // Split Array in into right and left by defining a pivot
  const middle = Math.floor(length / 2)
  //left half
  const left = array.slice(0, middle)
  //right half
  const right = array.slice(middle)
  
  //merge the two halves using the next function
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  //keep an index count instead of using a loop to iterate
  let leftIndex = 0;
  let rightIndex = 0;
  //append the lower value of the left or right indices 
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }
  //our concatenated and sorted array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([5,1,0,2,4,6,7,9], 0, 7))

