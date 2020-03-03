import { helper } from '@ember/component/helper';

/**
 * PascalCase a string.
 *
 * @public
 * @function stringToPascalCase
 * @param {string} value The string to PascalCase.
 * @returns {string} The PascalCased string.
 */
export function stringToPascalCase([value]) {
  return value
    .toLowerCase()
    .split(' ')
    .map(word => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join('');
}

export default helper(stringToPascalCase);
