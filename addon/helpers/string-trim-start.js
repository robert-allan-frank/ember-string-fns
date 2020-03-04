import { helper } from '@ember/component/helper';

/**
 * Trim the start of a string.
 *
 * @public
 * @function stringTrimStart
 * @param {string} value The string to trim.
 * @returns {string} The trimmed string.
 */
export function stringTrimStart([value = '']) {
  return value.replace(/^[\s\uFEFF\xA0]+/g, '');
}

export default helper(stringTrimStart);
