const Graph = require('../src/Graph');

const expect = require('expect');

describe('Graph', function () {

    it('add vertax/edge', function () {
        let graph = new Graph();
        expect(graph.addVertax(0)).toEqual({ 0: [] });
        expect(graph.addVertax(1)).toEqual({ 0: [], 1: [] });
        expect(graph.addVertax(2)).toEqual({ 0: [], 1: [], 2: [] });
        expect(graph.addVertax(3)).toEqual({ 0: [], 1: [], 2: [], 3: [] });

        expect(graph.addEdge(0, 2)).toEqual({ 0: [2], 1: [], 2: [0], 3: [] });
        expect(graph.addEdge(0, 2)).toEqual({ 0: [2], 1: [], 2: [0], 3: [] })
        
        expect(graph.addEdge(1, 2)).toEqual({ 0: [2], 1: [2], 2: [0,1], 3: [] })
        expect(graph.addEdge(1, 3)).toEqual({ 0: [2], 1: [2,3], 2: [0,1], 3: [1] })

    })
});