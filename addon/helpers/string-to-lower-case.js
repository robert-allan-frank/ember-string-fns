import { helper } from '@ember/component/helper';

/**
 * Lowercase a string.
 *
 * @public
 * @function stringToLowerCase
 * @param {string} value The string to lowercase.
 * @returns {string} The lowercased string.
 */
export function stringToLowerCase([value]) {
  return value.toLowerCase();
}

export default helper(stringToLowerCase);
