import assert from 'assert'
import countAllPaarl from '../JS/countAllPaarl.js';

describe('The countAllPaarl function', function () {
    it('It should return the number of registration numbers in the string for Paarl', function () {
        assert.equal(countAllPaarl('CJ 182736'), 1);
    });


})