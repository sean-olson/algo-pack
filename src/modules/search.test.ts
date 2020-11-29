import {binarySearch} from './search';

test('Binary Search Success', () => {
    const in_sequence = 21;
    const sequence = [1, 3, 5, 8, 13, 21, 34, 55];
    expect(binarySearch(sequence, in_sequence)).toBe(5);    
});

test('Binary Search Fail', () => {
    const not_in_sequence = 22;
    const have_not_numeric_target = [1, 5, 9, 13, 99, 100, 150, 151];   
    expect(binarySearch(have_not_numeric_target, not_in_sequence)).toBe(-1);    
});