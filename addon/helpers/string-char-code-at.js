import { helper } from '@ember/component/helper';

/**
 * Get a character by utf-16 code.
 *
 * @public
 * @function stringCharCodeAt
 * @param {string} value The string value.
 * @param {number} index The index to get the character at.
 * @returns {string} The string character.
 */
export function stringCharCodeAt([value = '', index]) {
  return value.charCodeAt(index);
}

export default helper(stringCharCodeAt);
