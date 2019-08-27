import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-lower-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can lower case upper case', async function(assert) {
    await render(hbs`{{string-to-lower-case 'EMBER'}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('can lower case mixed case', async function(assert) {
    await render(hbs`{{string-to-lower-case 'eMbEr'}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });
});
