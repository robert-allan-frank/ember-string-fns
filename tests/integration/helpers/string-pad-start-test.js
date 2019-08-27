import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | string-pad-start', function(hooks) {
  setupRenderingTest(hooks);

  test('does pad start', async function(assert) {
    await render(hbs`{{string-pad-start 'ember' '-' 10}}`);
    assert.equal(this.element.textContent.trim(), '-----ember');
  });

  test('does pad replacement', async function(assert) {
    await render(hbs`{{string-pad-start 'ember' 'i love ' 12}}`);
    assert.equal(this.element.textContent.trim(), 'i love ember');
  });
});
