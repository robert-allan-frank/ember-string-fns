import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-camel-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can camel case lower case', async function(assert) {
    await render(hbs`{{string-to-camel-case 'ember is awesome'}}`);
    assert.equal(this.element.textContent.trim(), 'emberIsAwesome');
  });

  test('can camel case mixed case', async function(assert) {
    await render(hbs`{{string-to-camel-case 'eMbEr Is aWeSOmE'}}`);
    assert.equal(this.element.textContent.trim(), 'emberIsAwesome');
  });

  test('can camel case upper case', async function(assert) {
    await render(hbs`{{string-to-camel-case 'EMBER IS AWESOME'}}`);
    assert.equal(this.element.textContent.trim(), 'emberIsAwesome');
  });
});
