define('my-first-ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'my-first-ember-app/tests/helpers/start-app', 'my-first-ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _myFirstEmberAppTestsHelpersStartApp, _myFirstEmberAppTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _myFirstEmberAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _myFirstEmberAppTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});