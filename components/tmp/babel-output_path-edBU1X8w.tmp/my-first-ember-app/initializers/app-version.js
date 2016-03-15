define('my-first-ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'my-first-ember-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _myFirstEmberAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_myFirstEmberAppConfigEnvironment['default'].APP.name, _myFirstEmberAppConfigEnvironment['default'].APP.version)
  };
});