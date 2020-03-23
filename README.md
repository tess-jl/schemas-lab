# Mongo Schemas Lab

### Mongoose, MongoDB, Node.js, Express 

___

#### Assignment: "... use Jest to test a Validator class and a Schema class of MongoDB

**USE TDD Practices**

1. `Validator` class
2. `Schema` class

### Validator

The `Validator` class is used to validate and cast a single field in an object.

```js
const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const ageValidator = new Validator('age', {
  type: String,
  required: true
});

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const dog = {
  name: 'spot',
  age: '5',
  weight: '20 lbs'
};

nameValidator.validate(dog) // returns 'spot'
age.validate(dog) // returns 5
colorValidator.validate(dog) // throws error
```

#### Testing

* Test that `validate` method can take an object and return a fields value
* Test that `validate` method can take an object and throw an error
* Test all permutations:
  * required and field missing
  * required and field there but wrong type
  * required and field there and right type
  * not required and field missing
  * not required and field there but wrong type
  * not required and field there and right type

#### Implementation

* `Validator` is initialize with two parameters: `field` and `configuration`
  * use your `getCaster` method from yesterdays lab to get the correct `castTo*` function
    based on `type` from the `configuration` parameter passed in
* `Validator` has a `validate` method that takes an object to validate
  * make sure the field is there if it is required
  * use the `castTo*` function to cast the field

### Schema

The `Schema` class is used to validate and cast an entire object.

```js
const schema = new Schema({
  dog: {
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

schema.validate(spot) // returns { name: 'spot', age: 5, weight: '20 lbs' }
schema.validate(rover) // returns { name: 'rover', age: 10 };'
schema.validate(who) // throws a errors about name being required and age not being a number
```

#### Testing

**Don't retest functionality already tested by your Validator tests**

* Test that `validate` method returns the object with all fields cast
* Test that `validate` method throws an error if the object doesn't follow the schema

#### Implementation

* `Schema` is initialized with an object defining a schema (`schemaDefinition`)
  * use the object to create an array of `Validator`s for each key/value in `schemaDefinition`
    and store the array in `this.validators`
`Schema` has a `validate` method that takes an object
  * invoke the `validate` method for each `Validator` in `this.validate`"
