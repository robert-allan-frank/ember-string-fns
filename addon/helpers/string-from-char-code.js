import { helper } from '@ember/component/helper';

/**
 * Get a character from utf-16 codes.
 *
 * @public
 * @function stringFromCharCode
 * @param {...number} codes The array of codes.
 * @returns {string} The string sequence.
 */
export function stringFromCharCode([...codes]) {
  return String.fromCharCode(...codes);
}

export default helper(stringFromCharCode);
