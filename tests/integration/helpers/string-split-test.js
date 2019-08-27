import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-split', function(hooks) {
  setupRenderingTest(hooks);

  test('can split a string', async function(assert) {
    await render(hbs`{{string-split 'a.b.c' '.'}}`);
    assert.equal(this.element.textContent.trim(), 'a,b,c');
  });
});
