import assert from 'assert'
import yearsAgo from '../functions/yearsAgo.js';

describe('The yearsAgo function' , function(){
    it('It should return how many years ago that year is from the current year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('It should return how many years ago that year is from the current year' , function(){
      assert.equal(yearsAgo(2000),23);
  });

  it('It should return  no year was found when no year is passed in the string ' , function(){
    assert.equal(yearsAgo(''), 'no year was found');
});
  });
