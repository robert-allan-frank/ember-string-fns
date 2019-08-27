import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-ends-with', function(hooks) {
  setupRenderingTest(hooks);

  test('does end with', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not end with', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does end with partial value', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'ber'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not end with partial value', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'BER'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does not end with partial value case sensitive', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'BER' false}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does end with partial value case insensitive', async function(assert) {
    await render(hbs`{{string-ends-with 'ember' 'BER' true}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
