import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-trim', function(hooks) {
  setupRenderingTest(hooks);

  test('can trim the entire string', async function(assert) {
    await render(hbs`{{string-trim '   abc   '}}`);
    assert.equal(this.element.textContent, 'abc');
  });
});
