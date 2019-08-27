import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-concat', function(hooks) {
  setupRenderingTest(hooks);

  test('can concatenate strings', async function(assert) {
    await render(hbs`{{string-concat 'i' ' ' 'love' ' ' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'i love ember');
  });
});
