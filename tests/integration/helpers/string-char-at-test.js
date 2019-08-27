import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-char-at', function(hooks) {
  setupRenderingTest(hooks);

  test('can get a character from a string', async function(assert) {
    await render(hbs`{{string-char-at 'ember' 2}}`);
    assert.equal(this.element.textContent.trim(), 'b');
  });
});
