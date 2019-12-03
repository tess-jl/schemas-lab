const { Validator } = require('../lib/Validator.js');



//REQUIRED PERMUTATIONS
// required and field missing
const nameValidator = new Validator('name', {
  type: String,
  required: true
});
const noNameDog = { 
  age: 5, 
  weight: '20 lbs'
}; 

// required and field there but wrong type
const invalidNameDog = {
  name: 5, 
  age: 5, 
  weight: '20 lbs'
}; 
// required and field there and right type
const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

//NOT REQUIRED PERMUTATIONS
// not required and field missing
const nameValidatorRequiredFalse = new Validator('name', {
  type: String,
  required: false
});
//with noNameDog 

// not required and field there but wrong type --> with invalidNameDog
// not required and field there and right type --> with dog


describe('Validator class tests', () => {
  describe('Validator class method tests', () => {
    it('can take an object and return a field\'s value', () => {
      expect(nameValidator.validate(invalidNameDog)).toEqual('5');
      expect(nameValidator.validate(dog)).toEqual('spot');
      expect(nameValidatorRequiredFalse.validate(noNameDog)).toBeNull();
      expect(nameValidatorRequiredFalse.validate(invalidNameDog)).toEqual('5');
      expect(nameValidatorRequiredFalse.validate(dog)).toEqual('spot');
    });
    it('can take an object and throw an error', () => {
      expect(() => nameValidator.validate(noNameDog)).toThrowErrorMatchingSnapshot();
    });
  

    // it('can take an object and throw an error', () => {
    //   expect(isNumber(3)).toBeTruthy();
      
    // });
  

  });
});
