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
            if (numbers[0] > numbers[i]) {
                this.removeAndInsert(numbers, i, 0);
            } else {
                for (let index = 0; index < i; index++) {
                    if (numbers[index] > numbers[i]) {
                        this.removeAndInsert(numbers, i, index);
                    }
                }
            }
        }
        return numbers;
    }

    removeAndInsert(numbers, removeIndex, insertIndex) {
        const temp = numbers[removeIndex];
        numbers.splice(removeIndex, 1);
        numbers.splice(insertIndex, 0, temp);
    }

    mergeSort(numbers) {
        if (numbers.length <= 1) {
            return numbers;
        }
        const middlePoint = Math.floor(numbers.length / 2);
        const leftPart = numbers.slice(0, middlePoint);
        const rightPart = numbers.slice(middlePoint, numbers.length);
        return this.merge(this.mergeSort(leftPart), this.mergeSort(rightPart))
    }

    merge(left, right) {
        let leftPoint = 0;
        let rightPoint = 0;
        let mergedArray = [];
        while (leftPoint < left.length && rightPoint < right.length) {
            if (left[leftPoint] < right[rightPoint]) {
                mergedArray.push(left[leftPoint]);
                leftPoint++;
            } else {
                mergedArray.push(right[rightPoint]);
                rightPoint++;
            }
        }
        return mergedArray.concat(left.slice(leftPoint)).concat(right.slice(rightPoint));;
    }
}

module.exports = Util;