define('my-first-ember-app/tests/helpers/start-app', ['exports', 'ember', 'my-first-ember-app/app', 'my-first-ember-app/config/environment'], function (exports, _ember, _myFirstEmberAppApp, _myFirstEmberAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _myFirstEmberAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _myFirstEmberAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});