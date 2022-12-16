const BinaryTree = require('../src/BinaryTree');

const expect = require('expect');

describe('BinaryTree', function () {

    it('insert', function () {
        let tree = new BinaryTree();
        expect(tree.insert(9)).toEqual({ left: null, right: null, value: 9 });

        expect(tree.insert(4)).toEqual({ left: { left: null, right: null, value: 4 }, right: null, value: 9 });

        expect(tree.insert(20)).toEqual({ left: { left: null, right: null, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });

        expect(tree.insert(1)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: null, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });

        expect(tree.insert(6)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: { left: null, right: null, value: 6 }, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });

        expect(tree.insert(15)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: { left: null, right: null, value: 6 }, value: 4 }, right: { left: { left: null, right: null, value: 15 }, right: null, value: 20 }, value: 9 });

        expect(tree.insert(170)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: { left: null, right: null, value: 6 }, value: 4 }, right: { left: { left: null, right: null, value: 15 }, right: { left: null, right: null, value: 170 }, value: 20 }, value: 9 });
    });
    it('lookup', function () {
        let tree = new BinaryTree();
        RecreateTree(tree);
        expect(tree.lookup(9)).toEqual(true);

        expect(tree.lookup(4)).toEqual(true);

        expect(tree.lookup(20)).toEqual(true);
        expect(tree.lookup(1)).toEqual(true);
        expect(tree.lookup(6)).toEqual(true);

        expect(tree.lookup(15)).toEqual(true);
        expect(tree.lookup(170)).toEqual(true);
        expect(tree.lookup(61)).toEqual(false);
        expect(tree.lookup(611)).toEqual(false);

        expect(tree.lookup(-611)).toEqual(false);
    });
    it('remove', function () {
        let tree = new BinaryTree();
        RecreateTree(tree);
        expect(tree.remove(170)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: { left: null, right: null, value: 6 }, value: 4 }, right: { left: { left: null, right: null, value: 15 }, right: null, value: 20 }, value: 9 });

        expect(tree.remove(15)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: { left: null, right: null, value: 6 }, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });


        expect(tree.remove(6)).toEqual({ left: { left: { left: null, right: null, value: 1 }, right: null, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });


        expect(tree.remove(1)).toEqual({ left: { left: null, right: null, value: 4 }, right: { left: null, right: null, value: 20 }, value: 9 });


        expect(tree.remove(20)).toEqual({ left: { left: null, right: null, value: 4 }, right: null, value: 9 });

        expect(tree.remove(4)).toEqual({ left: null, right: null, value: 9 });

        expect(tree.remove(9)).toEqual(null);

        RecreateTree(tree);




        expect(tree.remove(4)).toEqual(
            {
                left: {
                    left: null,
                    right: {
                        left: null, right: null, value: 6
                    }, value: 1
                },
                right: {
                    left: {
                        left: null, right: null, value: 15
                    },
                    right: {
                        left: null, right: null, value: 170
                    },
                    value: 20
                },
                value: 9
            }
        );


        expect(tree.remove(20)).toEqual(
            {
                left: {
                    left: null,
                    right: {
                        left: null, right: null, value: 6
                    }, value: 1
                },
                right: {
                    left: null,
                    right: {
                        left: null, right: null, value: 170
                    },
                    value: 15
                },
                value: 9
            }
        );


        expect(tree.remove(1)).toEqual(
            {
                left: {
                    left: null, right: null, value: 6
                },
                right: {
                    left: null,
                    right: {
                        left: null, right: null, value: 170
                    },
                    value: 15
                },
                value: 9
            }
        );

        expect(tree.remove(15)).toEqual(
            {
                left: {
                    left: null, right: null, value: 6
                },
                right: {
                    left: null,
                    right: null,
                    value: 170
                },
                value: 9
            }
        );

        expect(tree.remove(9)).toEqual(
            {
                left: null,
                right: {
                    left: null,
                    right: null,
                    value: 170
                },
                value: 6
            }
        );

        expect(tree.remove(6)).toEqual(
            {
                left: null,
                right: null,
                value: 170
            }
        );

        expect(tree.remove(170)).toEqual(null);
    });


    it('BFS', () => {
        let tree = new BinaryTree();
        RecreateTree(tree);
        expect(tree.BFS()).toEqual([9, 4, 20, 1, 6, 15, 170]);
    });

    it('BFS Recursive', () => {
        let tree = new BinaryTree();
        RecreateTree(tree);
        expect(tree.BFSResersiveFn()).toEqual([9, 4, 20, 1, 6, 15, 170]);
    });
});

function RecreateTree(tree) {
    tree.insert(9);
    tree.insert(4);
    tree.insert(20);
    tree.insert(1);
    tree.insert(6);
    tree.insert(15);
    tree.insert(170);
}
