import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-replace-all', function(hooks) {
  setupRenderingTest(hooks);

  test('does replace all words', async function(assert) {
    await render(hbs`{{string-replace-all 'react react react' 'react' 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'ember ember ember');
  });

  test('does not replace single word case sensitive', async function(assert) {
    await render(hbs`{{string-replace-all 'react react react' 'REACT' 'ember' false}}`);
    assert.equal(this.element.textContent.trim(), 'react react react');
  });

  test('does not replace single word case insensitive', async function(assert) {
    await render(hbs`{{string-replace-all 'react react react' 'REACT' 'ember' true}}`);
    assert.equal(this.element.textContent.trim(), 'ember ember ember');
  });
});
