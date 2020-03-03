import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-pascal-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can pascal case lower case', async function(assert) {
    await render(hbs`{{string-to-pascal-case 'ember is awesome'}}`);
    assert.equal(this.element.textContent.trim(), 'EmberIsAwesome');
  });

  test('can pascal case mixed case', async function(assert) {
    await render(hbs`{{string-to-pascal-case 'eMbEr Is aWeSOmE'}}`);
    assert.equal(this.element.textContent.trim(), 'EmberIsAwesome');
  });

  test('can pascal case upper case', async function(assert) {
    await render(hbs`{{string-to-pascal-case 'EMBER IS AWESOME'}}`);
    assert.equal(this.element.textContent.trim(), 'EmberIsAwesome');
  });
});
