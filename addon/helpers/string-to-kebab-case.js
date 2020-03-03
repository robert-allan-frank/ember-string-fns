import { helper } from '@ember/component/helper';

/**
 * kebab-case a string.
 *
 * @public
 * @function stringToKebabCase
 * @param {string} value The string to kebab-case.
 * @returns {string} The kebab-cased string.
 */
export function stringToKebabCase([value]) {
  return value
    .toLowerCase()
    .split(' ')
    .join('-');
}

export default helper(stringToKebabCase);
