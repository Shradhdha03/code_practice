const Util = require('../src/Util');

const expect = require('expect');

describe('Util', function () {

    it('factorialRecursive', function () {
        let util = new Util();
        expect(util.factorialRecursive(1)).toBe(1);
        expect(util.factorialRecursive(2)).toBe(2);
        expect(util.factorialRecursive(3)).toBe(6);
        expect(util.factorialRecursive(4)).toBe(24);
    });

    it('factorialIterative', function () {
        let util = new Util();
        expect(util.factorialIterative(1)).toBe(1);
        expect(util.factorialIterative(2)).toBe(2);
        expect(util.factorialIterative(3)).toBe(6);
        expect(util.factorialIterative(4)).toBe(24);
        expect(util.factorialIterative(5)).toBe(120);
    });

    it('fibonacciRecursive', function () {
        let util = new Util();
        expect(util.fibonacciRecursive(0)).toBe(0);
        expect(util.fibonacciRecursive(1)).toBe(1);
        expect(util.fibonacciRecursive(2)).toBe(1);
        expect(util.fibonacciRecursive(3)).toBe(2);
        expect(util.fibonacciRecursive(4)).toBe(3);
        expect(util.fibonacciRecursive(5)).toBe(5);
        expect(util.fibonacciRecursive(6)).toBe(8);
    });

    it('fibonacciIterative', function () {
        let util = new Util();
        expect(util.fibonacciInterative(0)).toBe(0);
        expect(util.fibonacciInterative(1)).toBe(1);
        expect(util.fibonacciInterative(2)).toBe(1);
        expect(util.fibonacciInterative(3)).toBe(2);
        expect(util.fibonacciInterative(4)).toBe(3);
        expect(util.fibonacciInterative(5)).toBe(5);
        expect(util.fibonacciInterative(6)).toBe(8);
    });

    it('basicSort', function () {
        let util = new Util();
        expect(util.basicSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.basicSort([1])).toEqual([1]);
        expect(util.basicSort([])).toEqual([]);
        expect(util.basicSort([0, 0])).toEqual([0, 0]);
    });

    it('bubbleSort', function () {
        let util = new Util();
        expect(util.bubbleSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.bubbleSort([1])).toEqual([1]);
        expect(util.bubbleSort([])).toEqual([]);
        expect(util.bubbleSort([0, 0])).toEqual([0, 0]);

    });

    it('selectionSort', function () {
        let util = new Util();
        expect(util.selectionSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.selectionSort([40, 23, 45])).toEqual([23, 40, 45]);
        expect(util.selectionSort([])).toEqual([]);
        expect(util.selectionSort([0, 0])).toEqual([0, 0]);
    })

    it('insertionSort', function () {
        let util = new Util();
        expect(util.insertionSort([10, 5])).toEqual([5, 10]);
        expect(util.insertionSort([10, 5, 3])).toEqual([3, 5, 10]);
        expect(util.insertionSort([10, 5, 3, 9])).toEqual([3, 5, 9, 10]);
        expect(util.insertionSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.insertionSort([])).toEqual([]);
        expect(util.insertionSort([0, 0])).toEqual([0, 0]);
    })
    it('mergeSort', function () {
        let util = new Util();
        expect(util.mergeSort([10, 5])).toEqual([5, 10]);
        expect(util.mergeSort([10, 5, 3])).toEqual([3, 5, 10]);
        expect(util.mergeSort([10, 5, 3, 9])).toEqual([3, 5, 9, 10]);
        expect(util.mergeSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.mergeSort([])).toEqual([]);
        expect(util.mergeSort([0, 0])).toEqual([0, 0]);
    });
    it('quickSort', function () {
        let util = new Util();
        expect(util.quickSort([10, 5])).toEqual([5, 10]);
        expect(util.quickSort([10, 5, 3])).toEqual([3, 5, 10]);
        expect(util.quickSort([10, 4, 2, 1, 5, 3])).toEqual([1, 2, 3, 4, 5, 10]);
        expect(util.mergeSort([40, 23, 45, 21, 56, 23, 60, 1, 2, 1])).toEqual([1, 1, 2, 21, 23, 23, 40, 45, 56, 60]);
        expect(util.mergeSort([])).toEqual([]);
        expect(util.mergeSort([0, 0])).toEqual([0, 0]);

    });
    it('moveZeroes', function () {
        let util = new Util();
        // inplace
        let arr = [0, 10, 0, 4, 2, 1, 0, 5, 3];
        util.moveZeroes(arr);
        expect(arr).toEqual([10, 4, 2, 1, 5, 3, 0, 0, 0]);

        //inplace
        arr = [0, 10, 0, 4, 2, 1, 0, 5, 3];
        util.moveZeroes1(arr)
        expect(arr).toEqual([10, 4, 2, 1, 5, 3, 0, 0, 0]);
    })

    it('column number', function () {
        let util = new Util();

        expect(util.columnNumber('A')).toEqual(1);
        expect(util.columnNumber('Z')).toEqual(26);
        expect(util.columnNumber('AA')).toEqual(27);
        expect(util.columnNumber('AB')).toEqual(28);
        expect(util.columnNumber('ZZ')).toEqual(702);
        expect(util.columnNumber('FXSHRXW')).toEqual(2147483647);
    })

    it('majorityElement', function () {
        let util = new Util();

        expect(util.majorityElement([2, 1, 2, 1, 2])).toEqual(2);
        expect(util.majorityElementHashMap([2, 1, 2, 1, 2])).toEqual(2);
    });

    it('romanToInt', function () {
        let util = new Util();

        expect(util.romanToInt('III')).toEqual(3);
        expect(util.romanToInt('LVIII')).toEqual(58);
        expect(util.romanToInt('MCMXCIV')).toEqual(1994);
        expect(util.romanToInt('X')).toEqual(10);
        expect(util.romanToInt('MDCXCV')).toEqual(1695);

    });

    it('maxProfit', function () {
        let util = new Util();

        expect(util.maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
        expect(util.maxProfit([1, 2, 3, 4, 5])).toEqual(4);
        expect(util.maxProfit([7, 6, 4, 3, 1])).toEqual(0);

        expect(util.maxProfit1([7, 1, 5, 3, 6, 4])).toEqual(7);
        expect(util.maxProfit1([1, 2, 3, 4, 5])).toEqual(4);
        expect(util.maxProfit1([7, 6, 4, 3, 1])).toEqual(0);

        expect(util.maxProfit2([7, 1, 5, 3, 6, 4])).toEqual(7);
        expect(util.maxProfit2([1, 2, 3, 4, 5])).toEqual(4);
        expect(util.maxProfit2([7, 6, 4, 3, 1])).toEqual(0);

    });
});