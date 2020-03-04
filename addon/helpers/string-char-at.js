import { helper } from '@ember/component/helper';

/**
 * Get a character from a string at an index.
 *
 * @public
 * @function stringCharAt
 * @param {string} value The string value.
 * @param {number} index The index to get the character at.
 * @returns {string} The string character.
 */
export function stringCharAt([value = '', index]) {
  return value.charAt(index);
}

export default helper(stringCharAt);
