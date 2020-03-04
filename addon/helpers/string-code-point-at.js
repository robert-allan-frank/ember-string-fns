import { helper } from '@ember/component/helper';

/**
 * Get a code by code point.
 *
 * @public
 * @function stringCodePointAt
 * @param {string} value The string value.
 * @param {number} index The index to get the code at.
 * @returns {string} The string character.
 */
export function stringCodePointAt([value = '', index]) {
  return value.codePointAt(index);
}

export default helper(stringCodePointAt);
