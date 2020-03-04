import { helper } from '@ember/component/helper';

/**
 * Trim the end of a string.
 *
 * @public
 * @function stringTrimEnd
 * @param {string} value The string to trim.
 * @returns {string} The trimmed string.
 */
export function stringTrimEnd([value = '']) {
  return value.replace(/\+|[\s\uFEFF\xA0]+$/g, '');
}

export default helper(stringTrimEnd);
