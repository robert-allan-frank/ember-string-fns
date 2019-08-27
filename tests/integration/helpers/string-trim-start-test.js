import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-trim-start', function(hooks) {
  setupRenderingTest(hooks);

  test('can trim the start of a string', async function(assert) {
    await render(hbs`{{string-trim-start '   abc '}}`);
    assert.equal(this.element.textContent, 'abc ');
  });
});
