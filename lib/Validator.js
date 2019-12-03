const {
  getCaster
} = require('../lib/types.js');

class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type; 
    this.required = required; 
  }

  validate(inputObj) {
    if(!(this.field in inputObj) && this.required) {
      throw `the field ${this.field} does not exist in this input`;
    }
    if(!(this.field in inputObj)) {
      return null; 
    }
    const castTo = getCaster(this.type); 
    return castTo(inputObj[this.field]);
  }

}

module.exports = { Validator };




