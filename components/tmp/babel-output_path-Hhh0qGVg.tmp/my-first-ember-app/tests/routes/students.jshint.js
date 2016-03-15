define('my-first-ember-app/tests/routes/students.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/students.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/students.js should pass jshint.');
  });
});