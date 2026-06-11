import { jsonParse, jsonStringify } from './json';

describe('jsonParse()', () => {
  it('should parse a safe json object as usual.', () => {
    expect(jsonParse('{"foo":"bar","baz":123}')).toStrictEqual({ foo: 'bar', baz: 123 });

    expect(
      jsonParse('{"foo":"bar","baz":123}', (_, value) => (typeof value === 'number' ? value * 2 : value)),
    ).toStrictEqual({ foo: 'bar', baz: 246 });
  });

  it('should remove the forbidden keys "__proto__" and "constructor" from the parsed object.', () => {
    expect(
      jsonParse(
        '{"foo":"bar","__proto__":{"admin":true},"constructor":{"prototype":{"admin":true}},"x":{"p":"key","__proto__":{"admin":true},"constructor":{"prototype":{"admin":true}}}}',
      ),
    ).toStrictEqual({
      foo: 'bar',
      x: { p: 'key' },
    });
  });
});

describe('jsonStringify()', () => {
  it('should stringify a javascript object into a json object as usual.', () => {
    expect(jsonStringify({ foo: 'bar', baz: 123 })).toStrictEqual('{"foo":"bar","baz":123}');
  });
});
