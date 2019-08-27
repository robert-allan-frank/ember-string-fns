import { helper } from '@ember/component/helper';

/**
 * Determine if string includes another string.
 *
 * @public
 * @function stringIncludes
 * @param {string} haystack The string to search.
 * @param {string} needle The string to search for.
 * @param {boolean} ignoreCase Whether case insenstive search should be performed.
 * @returns {boolean} True if match is found.
 */
export function stringIncludes([haystack, needle, ignoreCase = false]) {
  let result;

  if (ignoreCase) {
    result = haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  } else {
    result = haystack.indexOf(needle) !== -1;
  }

  return result;
}

export default helper(stringIncludes);
