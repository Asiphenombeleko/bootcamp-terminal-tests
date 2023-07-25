import assert from 'assert'
import isWeekday from '../JS/isWeekday.js';

describe('The isWeekday function' , function(){
    it('It should return  the day of the week' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('It should return  the day of the week' , function(){
      assert.equal(isWeekday('Thursday'), true);
  });
  
  });
  

  