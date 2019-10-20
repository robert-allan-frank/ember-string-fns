import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-replace', function(hooks) {
  setupRenderingTest(hooks);

  test('does replace single word', async function(assert) {
    await render(hbs`{{string-replace 'react' 'react' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('does replace within a phrase', async function(assert) {
    await render(hbs`{{string-replace 'i love react framework' 'react' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'i love ember framework');
  });

  test('does not replace single word case sensitive', async function(assert) {
    await render(hbs`{{string-replace 'react' 'REACT' 'ember' false}}`);
    assert.equal(this.element.textContent.trim(), 'react');
  });

  test('does not replace single word case insensitive', async function(assert) {
    await render(hbs`{{string-replace 'react' 'REACT' 'ember' true}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('returns value if no find exists', async function(assert) {
    await render(hbs`{{string-replace 'react'}}`);
    assert.equal(this.element.textContent.trim(), 'react');
  });
});
