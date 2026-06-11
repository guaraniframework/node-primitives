/**
 * Checks if the provided data is a non-empty string.
 *
 * @param data Data to be checked.
 * @returns Whether or not the provided data is a non-empty string.
 */
export function isNonEmptyString(data: unknown): data is string {
  return typeof data === 'string' && data.length > 0;
}
