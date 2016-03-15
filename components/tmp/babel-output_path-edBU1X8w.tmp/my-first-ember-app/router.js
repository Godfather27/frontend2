define('my-first-ember-app/router', ['exports', 'ember', 'my-first-ember-app/config/environment'], function (exports, _ember, _myFirstEmberAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _myFirstEmberAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('Sebastian');
    this.route('students');
  });

  exports['default'] = Router;
});