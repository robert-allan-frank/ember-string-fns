import { helper } from '@ember/component/helper';

/**
 * Get a character from code points.
 *
 * @public
 * @function stringFromCodePoint
 * @param {...number} points The array of points.
 * @returns {string} The string sequence.
 */
export function stringFromCodePoint([...points]) {
  return String.fromCodePoint(...points);
}

export default helper(stringFromCodePoint);
