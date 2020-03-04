import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-title-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can title case lower case', async function(assert) {
    await render(hbs`{{string-to-title-case "ember is awesome isn't it?"}}`);
    assert.equal(this.element.textContent.trim(), "Ember Is Awesome Isn't It?");
  });

  test('can title case mixed case', async function(assert) {
    await render(hbs`{{string-to-title-case "eMbEr Is aWeSOmE iSn'T It?"}}`);
    assert.equal(this.element.textContent.trim(), "Ember Is Awesome Isn't It?");
  });

  test('can title case upper case', async function(assert) {
    await render(hbs`{{string-to-title-case "EMBER IS AWESOME ISN'T IT?"}}`);
    assert.equal(this.element.textContent.trim(), "Ember Is Awesome Isn't It?");
  });
});
