const { Validator } = require('../lib/Validator.js');

// const nameValidator = new Validator('name', { type: String, required: true });
// const ageValidator = new Validator('age', { type: Number, required: true });
// const weightValidator = new Validator('weight', { type: String, required: false });

class Schema {
  constructor(schemaDefinition) {
    this.validators = Object.entries(schemaDefinition).map(entry => new Validator(entry[0], entry[1]));
  }

  validate(inputObj) {
    const errors = [];
    return Object.entries(inputObj).reduce((acc, curr) => {
      try { 
        const validator = this.validators.find(validator => validator.field === curr[0]);
        acc[curr[0]] = validator.validate(inputObj); 
      } 
      catch(error) {
        errors.push(error);
      }

      return acc; 
    }, {});
  }
}

module.exports = { Schema };
