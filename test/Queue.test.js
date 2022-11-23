
const Queue = require('../src/Queue');
const expect = require('expect');


describe('Queue', () => {
    it('queue/unqueue/peak', () => {
        let myQueue = new Queue();

        myQueue.queue('tom');
        expect(myQueue.peak().value).toBe('tom');

        myQueue.queue('hom');
        expect(myQueue.last.value).toBe('hom');

        myQueue.queue('soom');
        expect(myQueue.last.value).toBe('soom');

        myQueue.dequeue();
        expect(myQueue.peak().value).toBe('hom');
        expect(myQueue.last.value).toBe('soom');

        myQueue.dequeue();
        expect(myQueue.peak().value).toBe('soom');
        expect(myQueue.last.value).toBe('soom');

        myQueue.dequeue();
        expect(myQueue.peak()).toBe(null);
        expect(myQueue.last).toBe(null);
    });
});