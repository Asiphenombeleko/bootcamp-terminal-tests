import assert from 'assert'
import totalPhoneBill from '../functions/totalPhoneBill.js'
describe('The totalPhoneBill function' , function(){
    it('It should return   total bill for the call and sms' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('It should return  the total bill for the call and the sms' , function(){
      assert.equal('R3.40', totalPhoneBill('call, sms'));
  });

  });