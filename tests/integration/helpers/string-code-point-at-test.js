import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-code-point-at', function(hooks) {
  setupRenderingTest(hooks);

  test('can get string from a point code', async function(assert) {
    await render(hbs`{{string-code-point-at '★' 0}}`);
    assert.equal(this.element.textContent.trim(), '9733');
  });
});
