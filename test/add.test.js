const assert = require('assert')  ;

// this is just a basic test for ci/cd pipelines
describe('Simple Math Test', () => {
    it('1+1 should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('3*3 should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});