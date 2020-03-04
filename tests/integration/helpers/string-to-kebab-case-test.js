import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-kebab-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can kebab case lower case', async function(assert) {
    await render(hbs`{{string-to-kebab-case 'ember is awesome'}}`);
    assert.equal(this.element.textContent.trim(), 'ember-is-awesome');
  });

  test('can kebab case mixed case', async function(assert) {
    await render(hbs`{{string-to-kebab-case 'eMbEr Is aWeSOmE'}}`);
    assert.equal(this.element.textContent.trim(), 'ember-is-awesome');
  });

  test('can kebab case upper case', async function(assert) {
    await render(hbs`{{string-to-kebab-case 'EMBER IS AWESOME'}}`);
    assert.equal(this.element.textContent.trim(), 'ember-is-awesome');
  });
});
