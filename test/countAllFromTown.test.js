import assert from "assert"
import countAllFromTown from '../functions/countAllFromTown.js';




describe('The countAllFromTown function', function () {
    it('It should return the number of registration numbers in the string for town', function () {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
    it('It should return the number of registration numbers in the string for town', function () {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL','CL 234', 'CJ 556'), 3);
    });


})