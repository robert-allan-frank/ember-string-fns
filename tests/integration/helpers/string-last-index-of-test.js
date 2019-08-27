import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-last-index-of', function(hooks) {
  setupRenderingTest(hooks);

  test('can find last index', async function(assert) {
    await render(hbs`{{string-last-index-of 'ember ember' 'ber'}}`);
    assert.equal(this.element.textContent.trim(), '8');
  });

  test('can not find last index', async function(assert) {
    await render(hbs`{{string-last-index-of 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });

  test('can not find last index case sensitive', async function(assert) {
    await render(hbs`{{string-last-index-of 'ember ember' 'BER' false}}`);
    assert.equal(this.element.textContent.trim(), '-1');
  });

  test('can not find last index case insensitive', async function(assert) {
    await render(hbs`{{string-last-index-of 'ember ember' 'BER' true}}`);
    assert.equal(this.element.textContent.trim(), '8');
  });
});
