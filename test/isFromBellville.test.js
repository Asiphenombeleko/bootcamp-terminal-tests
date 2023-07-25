import assert from 'assert'
import isFromBellville from '../functions/isFromBellville.js'


describe('The isFromBellville function' , function(){
    it('It should return  true if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('It should return false if the registration number is not for Bellville' , function(){
      assert.equal(isFromBellville('CJ 123'), false);
  });
  
  });