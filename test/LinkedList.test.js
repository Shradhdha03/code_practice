
const LinkedList = require('../src/LinkedList');
const expect = require('expect');

describe('LinkedList', function () {
    it('append/prepand/insert/printList/remove', function () {
        let list = new LinkedList(10);

        expect(list).toEqual(
            {
                head: { value: 10, next: null },
                tail: { value: 10, next: null },
                length: 1
            }
        );
        list.append(4);
        expect(list).toEqual(
            {
                head: { value: 10, next: { value: 4, next: null } },
                tail: { value: 4, next: null },
                length: 2
            }
        );
        list.append(9);
        expect(list).toEqual(
            {
                head: { value: 10, next: { value: 4, next: { value: 9, next: null } } },
                tail: { value: 9, next: null },
                length: 3
            }
        );
        list.prepand(1);
        expect(list.printList()).toEqual([1, 10, 4, 9]);
        list.insert(2, 3);
        expect(list.printList()).toEqual([1, 10, 3, 4, 9]);

        list.insert(0, 20);
        expect(list.printList()).toEqual([20, 1, 10, 3, 4, 9]);

        list.insert(20, 8);
        expect(list.printList()).toEqual([20, 1, 10, 3, 4, 9, 8]);
        list.insert(7, 37);
        expect(list.printList()).toEqual([20, 1, 10, 3, 4, 9, 8, 37]);
      
        list.remove(0);
        expect(list.printList()).toEqual([1, 10, 3, 4, 9, 8, 37]);

        list.remove(6);
        expect(list.printList()).toEqual([1, 10, 3, 4, 9, 8]);


        list.remove(2);
        expect(list.printList()).toEqual([1, 10, 4, 9, 8]);

        list.remove(2);
        expect(list.printList()).toEqual([1, 10, 9, 8]);

        list.remove(2);
        expect(list.printList()).toEqual([1, 10, 8]);

        list.remove(1);
        expect(list.printList()).toEqual([1, 8]);

        list.remove(1);
        expect(list.printList()).toEqual([1]);

        list.remove(0);
        expect(list.printList()).toEqual([]);

        list = new LinkedList(30);
        list.append(10);

        list.append(52);

        list.append(34);

        list.append(56);


        list.append(44);

        expect(list.printList()).toEqual([30, 10, 52, 34, 56, 44]);
        list.reverse();
        expect(list.printList()).toEqual([44, 56, 34, 52, 10, 30]);
    });
});

