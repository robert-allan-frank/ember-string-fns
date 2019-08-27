import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-slice', function(hooks) {
  setupRenderingTest(hooks);

  test('can slice string with no end index', async function(assert) {
    await render(hbs`{{string-slice 'i love ember' 7}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('can slice string', async function(assert) {
    await render(hbs`{{string-slice 'i love ember' 7 12}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });
});
