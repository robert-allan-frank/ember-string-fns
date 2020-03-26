import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | string-html-safe', function(hooks) {
  setupRenderingTest(hooks);

  test('can get text value', async function(assert) {
    await render(hbs`{{string-html-safe 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('can get html value', async function(assert) {
    await render(hbs`{{string-html-safe '<p>ember</p>'}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });
});
