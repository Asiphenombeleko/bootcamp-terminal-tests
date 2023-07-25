import  assert from 'assert'
import fromWhere from '../functions/fromWhere.js'

describe('Test my fromWhere function' , function(){
    it('It should return  Bellville if the regNo has CY' , function(){
        assert.equal(fromWhere('567489 CY'), 'Bellville'); 
    });
    it('It should return  Paarl if the regNo has CJ' , function(){
      assert.equal(fromWhere('343502 CJ'), 'Paarl');
  });
  
  });