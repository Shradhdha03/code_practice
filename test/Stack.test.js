
const Stack = require('../src/Stack');
const expect = require('expect');

describe('Stack', function () {
    it('should push/pop items to the stack', function () {

        let myStack = new Stack();
        myStack.push('google');
        expect(myStack.peak()).toBe('google');
        expect(myStack.bottom.value).toBe('google');
        expect(myStack.length).toBe(1);

        myStack.push('udemy');
        expect(myStack.peak()).toBe('udemy');
        expect(myStack.bottom.value).toBe('google');
        expect(myStack.length).toBe(2);

        myStack.push('discort');
        expect(myStack.peak()).toBe('discort');
        expect(myStack.bottom.value).toBe('google');
        expect(myStack.length).toBe(3);

        myStack.pop();
        expect(myStack.peak()).toBe('udemy');
        expect(myStack.bottom.value).toBe('google');
        expect(myStack.length).toBe(2);

        myStack.pop();
        expect(myStack.peak()).toBe('google');
        expect(myStack.bottom.value).toBe('google');
        expect(myStack.length).toBe(1);

        myStack.pop();
        expect(myStack.top).toBe(null);
        expect(myStack.bottom).toBe(null);
        expect(myStack.length).toBe(0);
    });
});
;