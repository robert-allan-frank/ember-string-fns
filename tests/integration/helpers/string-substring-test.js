import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-substring', function(hooks) {
  setupRenderingTest(hooks);

  test('can substring string with no end index', async function(assert) {
    await render(hbs`{{string-substring 'i love ember' 7}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });

  test('can substring string', async function(assert) {
    await render(hbs`{{string-substring 'i love ember' 7 12}}`);
    assert.equal(this.element.textContent.trim(), 'ember');
  });
});
