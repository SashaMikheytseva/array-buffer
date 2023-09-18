import getBuffer from '../js/array-buffer';
import ArrayBufferConverter from '../js/ArrayBufferConverter';

test('checking toString', () => {
  const arrayBuffer = new ArrayBufferConverter();
  arrayBuffer.load(getBuffer());

  expect(arrayBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
