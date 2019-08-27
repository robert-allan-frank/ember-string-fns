import { helper } from '@ember/component/helper';
import { stringReplace } from './string-replace';

/**
 * Replace a string with all matches found from another string.
 *
 * @public
 * @function stringReplaceAll
 * @param {string} value The starting string.
 * @param {string} find The string to find.
 * @param {string} replace The string to replace with when found.
 * @param {boolean} ignoreCase Whether a case insensitive search should be performed.
 * @returns {string} The replaced string.
 */
export function stringReplaceAll([value, find, replace = '', ignoreCase = false]) {
  return stringReplace([value, find, replace, ignoreCase, true]);
}

export default helper(stringReplaceAll);
