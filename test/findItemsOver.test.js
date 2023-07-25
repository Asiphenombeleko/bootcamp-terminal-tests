import assert from 'assert'
import findItemsOver from '../JS/findItemsOver.js';

describe('The findItemsOver function' , function(){
    it('It should return  all items that are higher than the threshold' , function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(findItemsOver(itemList3, 38),
        [{name : 'apples', qty : 40}]);
    });
  });