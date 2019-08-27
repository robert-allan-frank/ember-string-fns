import { helper } from '@ember/component/helper';

/**
 * Determine if string ends with another string.
 *
 * @public
 * @function stringEndsWith
 * @param {string} haystack The string to search.
 * @param {string} needle The string to look for.
 * @param {boolean} ignoreCase Whether a case insensitive search should be performed.
 * @returns {boolean} True if match is found.
 */
export function stringEndsWith([haystack, needle, ignoreCase = false]) {
  let result = false;

  // haystack and needle are required
  if (haystack && needle) {
    // back position up the number of length of the needle
    let position = haystack.length;
    position -= needle.length;

    // look for needle by position
    let lastIndex;
    if (ignoreCase) {
      lastIndex = haystack.toLowerCase().indexOf(needle.toLowerCase(), position);
    } else {
      lastIndex = haystack.indexOf(needle, position);
    }

    // construct result
    result = lastIndex !== -1 && lastIndex === position;
  }

  return result;
}

export default helper(stringEndsWith);
