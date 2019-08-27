import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-includes', function(hooks) {
  setupRenderingTest(hooks);

  test('does find exact match', async function(assert) {
    await render(hbs`{{string-includes 'ember' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not find exact match', async function(assert) {
    await render(hbs`{{string-includes 'ember' 'react'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does find match at beginning of string', async function(assert) {
    await render(hbs`{{string-includes 'ember' 'emb'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does find match at end of string', async function(assert) {
    await render(hbs`{{string-includes 'ember' 'ber'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does find match in middle of string', async function(assert) {
    await render(hbs`{{string-includes 'ember' 'mbe'}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('does not find mixed case match', async function(assert) {
    await render(hbs`{{string-includes 'eMBERr' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does not find mixed case match case sensitive', async function(assert) {
    await render(hbs`{{string-includes 'eMBERr' 'ember' false}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('does not find mixed case match case insensitive', async function(assert) {
    await render(hbs`{{string-includes 'eMBERr' 'ember' true}}`);
    assert.equal(this.element.textContent.trim(), 'true');
  });
});
