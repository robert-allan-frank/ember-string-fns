import { helper } from '@ember/component/helper';

/**
 * Pad the left portion of the string with another string up to a total string length.
 *
 * @public
 * @function stringPadStart
 * @param {string} value The starting string.
 * @param {string} padding The string to pad with.
 * @param {number} length The total number of characters before the function exits.
 * @returns {string} The padded string.
 */
export function stringPadStart([value, padding = ' ', length = 0]) {
  // ensure string values
  let paddedValue = value + '';
  const paddingValue = padding + '';

  // padding value must be provided else infinite loop
  if (paddingValue.length > 0) {
    // do work
    while (paddedValue.length < length) {
      paddedValue = padding + paddedValue;
    }

    // overflow check
    if (paddedValue.length > length) {
      paddedValue = paddedValue.substring(0, length);
    }
  }

  return paddedValue;
}

export default helper(stringPadStart);
