# @revensky/primitives

Library that provides enhanced functionalities for NodeJS' primitive types.

## JSON

Enhances the JSON library by allowing the `jsonParse()` method to remove
the `__proto__` and `constructor` properties of any JSON object,
as they can be used to inject malicious code into the resulting object.

It also exposes a `jsonStringify()` method for stability purposes.

## Object

Adds the `isPlainObject()` method, which checks if an object's prototype
is either `Object` or `null`.

Adds the `removeNullishValues()` method, which is used to remove both
`null` and `undefined` values from objects or arrays. This method mutates
the original object in-place.

## Enum

Exports helper functions to handle enum operations.

- `getEnumKeys()`, `getEnumKey()`, `hasEnumKey()` - Handles operations on enums' keys.
- `getEnumValues()`, `getEnumValue()`, `hasEnumValue()`, `parseEnumValue()` - Handles operations on enums' values.
- `getEnumEntries()` - Returns a list of [key, value] elements of an enum.
