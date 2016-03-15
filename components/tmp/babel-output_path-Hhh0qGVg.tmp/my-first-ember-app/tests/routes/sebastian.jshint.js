define('my-first-ember-app/tests/routes/sebastian.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/sebastian.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sebastian.js should pass jshint.');
  });
});