define('my-first-ember-app/app', ['exports', 'ember', 'my-first-ember-app/resolver', 'ember-load-initializers', 'my-first-ember-app/config/environment'], function (exports, _ember, _myFirstEmberAppResolver, _emberLoadInitializers, _myFirstEmberAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _myFirstEmberAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myFirstEmberAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _myFirstEmberAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _myFirstEmberAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});