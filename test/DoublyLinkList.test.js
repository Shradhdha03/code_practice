const DoublyLinkList = require('../src/DoublyLinkList');
const expect = require('expect');

describe('DublyList', function () {
    it('append/prepand', function () {
        const list = new DoublyLinkList(10);
        expect(list).toEqual(
            {
                head: { value: 10, next: null, prev: null },
                tail: { value: 10, next: null, prev: null },
                length: 1
            }
        );
        list.append(4);
        expect(list.tail.value).toEqual(4);
        expect(list.tail.prev.value).toEqual(10);

        expect(list.head.value).toEqual(10);
        expect(list.head.next.value).toEqual(4);

        list.prepand(8);
        expect(list.tail.value).toEqual(4);
        expect(list.tail.prev.value).toEqual(10);
        expect(list.tail.prev.prev.value).toEqual(8);

        expect(list.head.value).toEqual(8);
        expect(list.head.next.value).toEqual(10);
        expect(list.head.next.next.value).toEqual(4);

        expect(list.printList()).toEqual([8, 10, 4]);

    });
});