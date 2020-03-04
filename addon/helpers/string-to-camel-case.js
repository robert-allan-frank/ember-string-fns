import { helper } from '@ember/component/helper';

/**
 * camelCase a string.
 *
 * @public
 * @function stringToCamelCase
 * @param {string} value The string to camelCase.
 * @returns {string} The camelCased string.
 */
export function stringToCamelCase([value = '']) {
  return value
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      return index === 0 ? word : `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join('');
}

export default helper(stringToCamelCase);
