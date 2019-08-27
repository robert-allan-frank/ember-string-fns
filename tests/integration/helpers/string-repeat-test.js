import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-repeat', function(hooks) {
  setupRenderingTest(hooks);

  test('can repeat string', async function(assert) {
    await render(hbs`{{string-repeat 'ember ' 3}}`);
    assert.equal(this.element.textContent.trim(), 'ember ember ember');
  });
});
