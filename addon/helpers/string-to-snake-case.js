import { helper } from '@ember/component/helper';

/**
 *  string_case a string.
 *
 * @public
 * @function stringToSnakeCase
 * @param {string} value The string to string_case.
 * @returns {string} The string_cased string.
 */
export function stringToSnakeCase([value = '']) {
  return value
    .toLowerCase()
    .split(' ')
    .join('_');
}

export default helper(stringToSnakeCase);
