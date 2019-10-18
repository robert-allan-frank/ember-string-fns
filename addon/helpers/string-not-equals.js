import { helper } from '@ember/component/helper';

/**
 * Determine if two or more are not equal.
 *
 * @public
 * @function stringNotEquals
 * @param {...string} values The strings to compare.
 * @return {boolean} True if all values are equal.
 */
export function stringNotEquals([...values]) {
  // range check at least 2 operands
  if (values.length < 2) {
    return false;
  }

  // get first value
  const first = values[0];

  // compare first with each subsequent value for a non match
  return values.slice(1).some(value => value !== first);
}

export default helper(stringNotEquals);
