import { helper } from '@ember/component/helper';

/**
 * Construct a single string by repeating the string a number of times.
 *
 * @public
 * @function stringRepeat
 * @param {string} value The starting string.
 * @param {number} repeat The total number of times to repeat.
 * @returns {string} The repeated string.
 */
export function stringRepeat([value = '', repeat = 0]) {
  let result = '';
  for (let i = 0; i < repeat; i++) {
    result += value;
  }
  return result;
}

export default helper(stringRepeat);
