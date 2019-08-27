import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-upper-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can upper case lower case', async function(assert) {
    await render(hbs`{{string-to-upper-case 'ember'}}`);
    assert.equal(this.element.textContent.trim(), 'EMBER');
  });

  test('can upper case mixed case', async function(assert) {
    await render(hbs`{{string-to-upper-case 'eMbEr'}}`);
    assert.equal(this.element.textContent.trim(), 'EMBER');
  });
});
