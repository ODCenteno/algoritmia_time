const { getMaxSubSum } = require('./maximal-subarray');


describe('Test suite for Arrays Leetcoding', () => {
  describe('Should return the sum of the contiguous subarray of arr with the maximal sum of itemstest for Sum', () => {

    test('should return the maximal sum of contiguous subarray for: [-1, 2, 3, -9]', () => {
      let arr = [-1, 2, 3, -9];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(5);
    });
    test('should return the maximal sum of contiguous subarray for: [2, -1, 2, 3, -9]', () => {
      let arr = [2, -1, 2, 3, -9];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(6);
    });
    test('should return the maximal sum of contiguous subarray for: [-1, 2, 3, -9, 11]', () => {
      let arr = [-1, 2, 3, -9, 11];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(11);
    });
    test('should return the maximal sum of contiguous subarray for: [-2, -1, 1, 2]', () => {
      let arr = [-2, -1, 1, 2];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(3);
    });
    test('should return the maximal sum of contiguous subarray for: [100, -9, 2, -3, 5]', () => {
      let arr = [100, -9, 2, -3, 5];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(100);
    });
    test('should return the maximal sum of contiguous subarray for: [1, 2, 3]', () => {
      let arr = [1, 2, 3];
			// Act / When
      const rta = getMaxSubSum(arr);
			//Assert / Then
      expect(rta).toBe(6);
    });
  });
});