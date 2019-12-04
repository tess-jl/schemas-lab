const { Schema } = require('../lib/Schema.js');

const schema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String
  }
});
  
const spot = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};
  
const rover = {
  name: 'rover',
  age: '10'
};
  
const who = {
  age: 'hi'
};


describe('Schema class tests', () => {
  describe('Schema class method tests', () => {
    it('returns the object with all fields cast', () => {
      expect(schema.validate(spot)).toEqual({
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      });
      expect(schema.validate(rover)).toEqual({
        name: 'rover',
        age: 10
      });
    });
    it('throws an error if the object doesn\'t follow the schema', () => {
      expect(schema.validate(who)).toThrowErrorMatchingSnapshot();
    });
  });
});
