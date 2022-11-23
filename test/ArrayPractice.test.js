const ArrayPractice = require('../src/ArrayPractice');
const expect = require('expect');

describe('ArrayPractice', function () {
	it('reverseString', function () {
		expect(new ArrayPractice().reverseString('a')).toBe('a');
		expect(new ArrayPractice().reverseString('ab')).toBe('ba');
		expect(new ArrayPractice().reverseString('aa')).toBe('aa');
		expect(new ArrayPractice().reverseString('aab')).toBe('baa');
	});
	it('reverseString2', function () {
		expect(new ArrayPractice().reverseString2('a')).toBe('a');
		expect(new ArrayPractice().reverseString2('ab')).toBe('ba');
		expect(new ArrayPractice().reverseString2('aa')).toBe('aa');
		expect(new ArrayPractice().reverseString2('aab')).toBe('baa');
	});
	it('reverseString3Recursive', function () {
		expect(new ArrayPractice().reverseString3Recursive('a')).toBe('a');
		expect(new ArrayPractice().reverseString3Recursive('ab')).toBe('ba');
		expect(new ArrayPractice().reverseString3Recursive('aa')).toBe('aa');
		expect(new ArrayPractice().reverseString3Recursive('aab')).toBe('baa');
	});
	it('find leaders', function () {
		expect(new ArrayPractice().leaders([16, 17, 4, 3, 5, 2])).toEqual(["17", "5", "2"]);
		expect(new ArrayPractice().leaders2([16, 17, 4, 3, 5, 2])).toEqual([17, 5, 2]);
	});
});