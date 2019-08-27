import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-from-char-code', function(hooks) {
  setupRenderingTest(hooks);

  test('can get a string from char code', async function(assert) {
    await render(hbs`{{string-from-char-code 189}}`);
    assert.equal(this.element.textContent.trim(), '½');
  });
});
