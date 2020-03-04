import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-sentence-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can sentence case lower case', async function(assert) {
    await render(hbs`{{string-to-sentence-case "ember is awesome! isn't it?"}}`);
    assert.equal(this.element.textContent.trim(), "Ember is awesome! Isn't it?");
  });

  test('can sentence case upper case', async function(assert) {
    await render(hbs`{{string-to-sentence-case "EMBER IS AWESOME! ISN'T IT?"}}`);
    assert.equal(this.element.textContent.trim(), "Ember is awesome! Isn't it?");
  });
});
