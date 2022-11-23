
const HashTable = require('../src/HashTable');
const expect = require('expect');

describe('HashTable', function () {
    it('set/get', function () {
        let hash = new HashTable(2);
        hash.set('grapes', 1000);
        hash.set('apple', 10);
        hash.set('banana', 50);
        expect(hash.get('grapes')).toBe(1000);
        expect(hash.get('apple')).toBe(10);
        expect(hash.get('banana')).toBe(50);
        expect(hash.keys()).toEqual(['apple', 'banana', 'grapes']);
    });
});

