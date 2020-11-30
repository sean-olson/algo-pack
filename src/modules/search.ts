
/**
 * @type {Array<number | string>} -- An array of numbers or characters, sorted in ascending order.
 */
type SortedArray = number[] | string[];

/**
 * Serach Module
 * @module algoPack/search
 */


/**
 * Finds the index of a target value (if it exists) in a sorted array of numbers or characters.
 * @param {array} subjectArray - A sorted (ascending order) array of either characters or numbers.
 * @param {string | number} target - The target value, either character or number being searched for in the array.
 * @returns {number} - The 0-based index position of the target in the subject array.  Returns -1 if the subject array does not contain the target.
 */
export function binarySearch(subjectArray: SortedArray, target: number): number {
    
  let initial = 0;
  let terminal = subjectArray.length - 1;

  while (initial <= terminal) {
    const mid = initial + Math.floor((terminal - initial) / 2);

    if (target === subjectArray[mid]) {
      return mid;
    }

    if (subjectArray[mid] < target) {
      initial = mid + 1;
    } else {
      terminal = mid - 1;
    }
  }
  return -1;
}
