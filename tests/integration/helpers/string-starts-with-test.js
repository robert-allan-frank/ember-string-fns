import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-starts-with', function(hooks) {
  setupRenderingTest(hooks);

  test('does start with', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not start with', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does start with partial value', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'emb'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not start with partial value', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'EMB'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does not start with partial value case sensitive', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'EMB' false}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does start with partial value case insensitive', async function(assert) {
    await render(hbs`{{string-starts-with 'ember' 'EMB' true}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
