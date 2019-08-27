import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-trim-end', function(hooks) {
  setupRenderingTest(hooks);

  test('can trim the end of a string', async function(assert) {
    await render(hbs`{{string-trim-end ' abc   '}}`);
    assert.equal(this.element.textContent, ' abc');
  });
});
