import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-to-snake-case', function(hooks) {
  setupRenderingTest(hooks);

  test('can snake case lower case', async function(assert) {
    await render(hbs`{{string-to-snake-case 'ember is awesome'}}`);
    assert.equal(this.element.textContent.trim(), 'ember_is_awesome');
  });

  test('can snake case mixed case', async function(assert) {
    await render(hbs`{{string-to-snake-case 'eMbEr Is aWeSOmE'}}`);
    assert.equal(this.element.textContent.trim(), 'ember_is_awesome');
  });

  test('can snake case upper case', async function(assert) {
    await render(hbs`{{string-to-snake-case 'EMBER IS AWESOME'}}`);
    assert.equal(this.element.textContent.trim(), 'ember_is_awesome');
  });
});
