import assert from 'assert'
import transportFee from '../JS/transportFee.js';

describe('The transportFee function' , function(){
    it('It should return  the amount for morning shift', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('It should return the amount for the afternoon shift' , function(){
      assert.equal(transportFee('afternoon'), 'R10');
  });

  it('It should return lies if it says night shifts are for free' , function(){
    assert.equal(transportFee('nightshift'), 'free');
});
  
  
  
  });
