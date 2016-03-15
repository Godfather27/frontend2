define('my-first-ember-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'my-first-ember-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _myFirstEmberAppConfigEnvironment) {

  var name = _myFirstEmberAppConfigEnvironment['default'].APP.name;
  var version = _myFirstEmberAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});