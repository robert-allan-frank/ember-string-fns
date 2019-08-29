import { helper } from '@ember/component/helper';

/**
 * Concatenate a series of strings.
 *
 * @public
 * @function stringConcat
 * @param {...string} value The string values.
 * @returns {string} The concatenated string.
 */
export function stringConcat([...values]) {
  return values.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
  }, '');
}

export default helper(stringConcat);
