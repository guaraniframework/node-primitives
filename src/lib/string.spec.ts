import { Buffer } from 'buffer';

import { isNonEmptyString } from './string';

const invalidNonEmptyStrings: any[] = [
  undefined,
  null,
  true,
  1,
  1.2,
  1n,
  Symbol('a'),
  Buffer,
  Buffer.alloc(1),
  () => 1,
  {},
  [],
  '',
];

describe('isNonEmptyString()', () => {
  it.each(invalidNonEmptyStrings)('should return false when the provided data is not a non-empty string.', (data) => {
    expect(isNonEmptyString(data)).toBeFalse();
  });

  it('should return true when the provided data is a non-empty string.', () => {
    expect(isNonEmptyString('foobar')).toBeTrue();
  });
});
