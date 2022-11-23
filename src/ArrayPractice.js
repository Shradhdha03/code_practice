class ArrayPractice {

    reverseString(str) {
        if (str.length > 1) {
            str = str.split('');
            for (let index = 0; index < parseInt(str.length / 2); index++) {
                const last_index = str.length - 1 - index;
                let temp = str[index];
                str[index] = str[last_index];
                str[last_index] = temp;
            }
            str = str.join('');
        }
        return str;
    }
    reverseString2(str) {
        return str.split('').reverse().join('');
    }
    reverseString3Recursive(str) {
        if (str.length > 1) {
            str = str.split('');
            this.reverseStringRecursion(str, 0, str.length - 1);
            str = str.join('');
        }
        return str;
    }
    reverseStringRecursion(str, first, last) {
        if (first < last) {
            const temp = str[first];
            str[first] = str[last];
            str[last] = temp;
            this.reverseStringRecursion(str, first + 1, last - 1);
        }
    }

    leaders(arr) {
        if (arr.length > 0) {
            let last_leader = arr[arr.length - 1];
            let larr = '' + last_leader;

            for (let index = arr.length - 2; index >= 0; index--) {
                if (arr[index] > last_leader) {
                    last_leader = arr[index];
                    larr = last_leader + ' ' + larr;
                }
            }
            return larr.split(' ');
        }
    }
    leaders2(arr) {
        if (arr.length > 0) {
            let last_leader = arr[arr.length - 1];
            let larr = [last_leader];
            for (let index = arr.length - 2; index >= 0; index--) {
                if (arr[index] > last_leader) {
                    last_leader = arr[index];
                    larr.push(last_leader);
                }
            }
            return larr.reverse();
        }
    }
}
module.exports = ArrayPractice;