import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-index-of', function(hooks) {
  setupRenderingTest(hooks);

  test('can find index', async function(assert) {
    await render(hbs`{{string-index-of 'ember' 'ber'}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });

  test('can not find index', async function(assert) {
    await render(hbs`{{string-index-of 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });

  test('can not find index case sensitive', async function(assert) {
    await render(hbs`{{string-index-of 'ember' 'BER' false}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });

  test('can not find index case insensitive', async function(assert) {
    await render(hbs`{{string-index-of 'ember' 'BER' true}}`);
    assert.equal(this.element.textContent.trim(), '2');
  });
});
