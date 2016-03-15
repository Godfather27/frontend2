define('my-first-ember-app/tests/unit/routes/sebastian-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/sebastian-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sebastian-test.js should pass jshint.');
  });
});