import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-char-code-at', function(hooks) {
  setupRenderingTest(hooks);

  test('can get string from a char code', async function(assert) {
    await render(hbs`{{string-char-code-at '½' 0}}`);
    assert.equal(this.element.textContent.trim(), '189');
  });
});
