import assert from 'assert'
import countRegNumber from '../JS/countRegNumber.js';

describe('The countRegNumber function', function () {

    it('It should return the number of registration numbers in the string', function () {
        assert.equal(countRegNumber('CA 182736'), 1);
    });


})