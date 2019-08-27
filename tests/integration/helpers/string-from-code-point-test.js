import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-from-code-point', function(hooks) {
  setupRenderingTest(hooks);

  test('can get a string from code point', async function(assert) {
    await render(hbs`{{string-from-code-point 9733}}`);
    assert.equal(this.element.textContent.trim(), '★');
  });
});
