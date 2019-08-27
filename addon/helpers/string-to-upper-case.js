import { helper } from '@ember/component/helper';

/**
 * Uppercase a string.
 *
 * @public
 * @function stringToUpperCase
 * @param {string} value The string to uppercase.
 * @returns {string} The uppercased string.
 */
export function stringToUpperCase([value]) {
  return value.toUpperCase();
}

export default helper(stringToUpperCase);
