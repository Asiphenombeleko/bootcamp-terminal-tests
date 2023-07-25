
import assert from 'assert'
import findItemsOver20 from '../JS/findItemsOver20.js';

describe('Test my findItemsOver20 function' , function(){
    it('It should return  all items that are bigger than 20' , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        assert.deepEqual(findItemsOver20(itemList),[{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
    });

  });