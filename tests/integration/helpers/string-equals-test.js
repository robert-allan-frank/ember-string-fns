import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-equals', function(hooks) {
  setupRenderingTest(hooks);

  test('can compare two values', async function(assert) {
    await render(hbs`{{string-equals 'ember' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare two not equal values', async function(assert) {
    await render(hbs`{{string-equals 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can compare n values', async function(assert) {
    await render(hbs`{{string-equals 'hello' 'hello' 'hello' 'hello' 'hello'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('can compare n not equal values', async function(assert) {
    await render(hbs`{{string-equals 'hello' 'hello' 'hello' 'hello' 'goodbye'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('can ensure at least two values are present', async function(assert) {
    await render(hbs`{{string-equals 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
