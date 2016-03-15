define('my-first-ember-app/tests/helpers/resolver', ['exports', 'my-first-ember-app/resolver', 'my-first-ember-app/config/environment'], function (exports, _myFirstEmberAppResolver, _myFirstEmberAppConfigEnvironment) {

  var resolver = _myFirstEmberAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _myFirstEmberAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myFirstEmberAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});