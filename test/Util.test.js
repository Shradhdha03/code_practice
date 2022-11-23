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
});