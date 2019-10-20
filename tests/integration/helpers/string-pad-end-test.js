import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-pad-end', function(hooks) {
  setupRenderingTest(hooks);

  test('does pad end', async function(assert) {
    await render(hbs`{{string-pad-end 'ember' '-' 10}}`);
    assert.equal(this.element.textContent.trim(), 'ember-----');
  });

  test('does pad replacement', async function(assert) {
    await render(hbs`{{string-pad-end 'ember' ' i love' 12}}`);
    assert.equal(this.element.textContent.trim(), 'ember i love');
  });

  test('does ensure no overflow of value', async function(assert) {
    await render(hbs`{{string-pad-end 'ember' '--------------------' 10}}`);
    assert.equal(this.element.textContent.trim(), 'ember-----');
  });
});
