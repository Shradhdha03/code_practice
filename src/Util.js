class Util {
    constructor() {
    }
    factorialRecursive(n) {
        if (n <= 2) {
            return n;
        }
        return n * this.factorialRecursive(n - 1);
    }

    factorialIterative(n) {
        let anwser = n;
        for (let index = n - 1; index > 1; index--) {
            anwser = anwser * index;
        }
        return anwser;
    }

    fibonacciRecursive(n) {
        if (n < 2) {
            return n;
        }

        return this.fibonacciRecursive(n - 1) + this.fibonacciRecursive(n - 2);
    }


    fibonacciInterative(n) {
        let awnser = [0, 1];
        for (let index = 2; index <= n; index++) {
            awnser.push(awnser[index - 1] + awnser[index - 2]);
        }
        return awnser[n];
    }

    basicSort(numbers) {
        for (let i = 0; i < numbers.length + 1; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] > numbers[j]) {
                    this.swapNumbers(numbers, i, j);
                }
            }
        }
        return numbers;
    }

    bubbleSort(numbers) {
        for (let j = 0; j < numbers.length - 1; j++) {
            for (let i = 0; i < numbers.length - j - 1; i++) {
                if (numbers[i] > numbers[i + 1]) {
                    this.swapNumbers(numbers, i, i + 1);
                }
            }
        }
        return numbers;
    }

    swapNumbers(numbers, i, j) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    selectionSort(numbers) {
        for (let index = 0; index < numbers.length - 1; index++) {
            const smallestIndex = this.getSmallestItemIndex(numbers, index);
            if (index !== smallestIndex) {
                this.swapNumbers(numbers, index, smallestIndex);
            }
        }
        return numbers;
    }

    getSmallestItemIndex(numbers, index) {
        let smallestIndex = index;
        for (let i = index + 1; i < numbers.length; i++) {
            if (numbers[smallestIndex] > numbers[i]) {
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }

    insertionSort(numbers) {

        for (let i = 1; i < numbers.length; i++) {

            for (let j = i; j >= 0; j--) {
                if (numbers[i] < numbers[j]) {

                }
            }
        }
    }
}

module.exports = Util;