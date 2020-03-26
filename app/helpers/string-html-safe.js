import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

/**
 * Create html safe string.
 *
 * @public
 * @function stringHtmlSafe
 * @param {string} value The string value.
 * @returns {string} The safe string.
 */
export function stringHtmlSafe([value = '']) {
  return htmlSafe(value);
}

export default helper(stringHtmlSafe);
