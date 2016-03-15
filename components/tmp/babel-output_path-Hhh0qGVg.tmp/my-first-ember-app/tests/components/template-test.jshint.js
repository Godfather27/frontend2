define('my-first-ember-app/tests/components/template-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/template-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/template-test.js should pass jshint.\ncomponents/template-test.js: line 8, col 31, Missing semicolon.\n\n1 error');
  });
});