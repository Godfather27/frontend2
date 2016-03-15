define('my-first-ember-app/tests/test-helper', ['exports', 'my-first-ember-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _myFirstEmberAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_myFirstEmberAppTestsHelpersResolver['default']);
});