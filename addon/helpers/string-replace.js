import { helper } from '@ember/component/helper';

/**
 * Replace a string with matches found from another string.
 *
 * @public
 * @function stringReplace
 * @param {string} value The starting string.
 * @param {string} find The string to find.
 * @param {string} replace The string to replace with when found.
 * @param {boolean} ignoreCase Whether a case insensitive search should be performed.
 * @param {number} global Whether all matches should be replaced for just the first.
 * @returns {string} The replaced string.
 */
export function stringReplace([value, find, replace = '', ignoreCase = false, global = false]) {
  // ensure there is something to find
  if (!find) {
    return value;
  }

  let needle = find;

  // regex needed for case insentive or global replace
  if (ignoreCase || global) {
    // determine regex flags
    let flags = '';

    if (global) {
      flags += 'g';
    }

    if (ignoreCase) {
      flags += 'i';
    }

    // build regex
    needle = new RegExp(find, flags);
  }

  // return updated string
  return value.replace(needle, replace);
}

export default helper(stringReplace);
