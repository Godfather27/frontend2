define('my-first-ember-app/tests/integration/components/template-test-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/template-test-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/template-test-test.js should pass jshint.');
  });
});