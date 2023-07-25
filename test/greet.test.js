
import assert from "assert";
import greet from "../functions/greet.js";


describe('The greet function', function(){

    it('should greet Sihle correctly', function(){
        assert.equal('Hello, Sihle', greet('Sihle'));
    });
    it('should greet Anathi correctly', function(){
        assert.equal('Hello, Anathi', greet('Anathi'));
    });
});