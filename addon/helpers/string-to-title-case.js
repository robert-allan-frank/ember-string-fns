import { helper } from '@ember/component/helper';

/**
 *  Title Case a string.
 *
 * @public
 * @function stringToTitleCase
 * @param {string} value The string to Title Case.
 * @returns {string} The Title Cased string.
 */
export function stringToTitleCase([value]) {
  return value
    .toLowerCase()
    .split(' ')
    .map(word => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
}

export default helper(stringToTitleCase);
