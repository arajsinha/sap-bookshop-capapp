const chai = require('chai');
const expect = chai.expect;

describe('CAP Application Test', function() {
    it('should pass this basic test', function() {
        let result = 3 + 2;
        expect(result).to.equal(5);
    });
});