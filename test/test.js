const chai = require('chai');
const expect = chai.expect;

describe('CAP Application Test', function() {
    it('should pass this basic test', function() {
        let result = 2 + 2;
        expect(result).to.equal(4);
    });
});