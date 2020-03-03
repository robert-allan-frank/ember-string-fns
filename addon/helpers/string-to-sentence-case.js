import { helper } from '@ember/component/helper';

/**
 *  Sentence case. a string.
 *
 * @public
 * @function stringToSentenceCase
 * @param {string} value The string to Sentence case.
 * @returns {string} The Sentence cased. string.
 */
export function stringToSentenceCase([value]) {
  return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, match => match.toUpperCase());
}

export default helper(stringToSentenceCase);
