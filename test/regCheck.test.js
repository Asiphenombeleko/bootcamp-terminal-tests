import assert from 'assert'
import regCheck from '../functions/regCheck.js';

describe('Test my regCheck function' , function(){
    it('It should return  true if a registration number is for Gauteng' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('It should return true if the registration number is not for Limpompo' , function(){
      assert.equal(regCheck('5566 L', 'L'), true);
  });
  
  it('It should return false if the registration number is not for Eastern Cape' , function(){
    assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
});

it('It should return false if the registration number is not for Limpompo' , function(){
    assert.equal(regCheck('5566 L', 'M'), false);
});
it('It should return false if the registration number is not for Eastern Cape' , function(){
    assert.equal(regCheck('ERT 123 EC', 'GP'), false)
});

  });