const {
  isNumber,
} = require('../lib/Validator.js');
  
describe('Validator class tests', () => {
  describe('Validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
    
    });

  });
});
