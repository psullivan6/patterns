// Conditionally add a value to object
const isSomeBoolean = false;
const options = {
  foo: 'Foo foo',
  bar: 7612332,
  baz: 'asdfkasdfasdf',
  ...(isSomeBoolean && {
    conditional: 'This is conditionally added to the object, cool'
  }
};
