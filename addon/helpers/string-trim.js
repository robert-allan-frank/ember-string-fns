import { helper } from '@ember/component/helper';

/**
 * Trim the start and end of a string.
 *
 * @public
 * @function stringTrim
 * @param {string} value The string to trim.
 * @returns {string} The trimmed string.
 */
export function stringTrim([value = '']) {
  return value.trim();
}

export default helper(stringTrim);
