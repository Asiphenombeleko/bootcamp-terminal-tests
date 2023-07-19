import assert from "assert";
import greet from "../greet.js";


describe('The greet function', function(){

    it('should greet Asiphe correctly', function(){
        assert.equal('Hello, Asiphe', greet('Asiphe'));
    });
    it('should greet Bunhle correctly', function(){
        assert.equal('Hello, Bunhle', greet('Bunhle'));
    });
});