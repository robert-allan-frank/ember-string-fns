import { helper } from '@ember/component/helper';

/**
 * Split a string into a string[] by a delimiter.
 *
 * @public
 * @function stringSplit
 * @param {string} value The string split.
 * @param {string} delimiter The delimiter to split on.
 * @returns {string[]} The split string.
 */
export function stringSplit([value, delimiter]) {
  return value.split(delimiter);
}

export default helper(stringSplit);
