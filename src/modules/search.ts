type sortedArray = number[] | string[];

export function binarySearch(sortedArr: sortedArray, element: number): number {
    
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;

}
