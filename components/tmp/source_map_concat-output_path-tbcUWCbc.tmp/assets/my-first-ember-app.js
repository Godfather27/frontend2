"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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
define('my-first-ember-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'my-first-ember-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _myFirstEmberAppConfigEnvironment) {

  var name = _myFirstEmberAppConfigEnvironment['default'].APP.name;
  var version = _myFirstEmberAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('my-first-ember-app/components/template-test', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: "li",
    classNames: ['test-class'],
    actions: {
      poke: function poke(data) {
        alert("you poked " + data);
      }
    },
    click: function click() {
      if (this.element.style.background === "rgb(225, 236, 255)" || this.element.style.background === "") {
        this.element.style.background = "#F8C7C7";
      } else {
        this.element.style.background = "#E1ECFF";
      }
    }
  });
});
define('my-first-ember-app/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('my-first-ember-app/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('my-first-ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('my-first-ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('my-first-ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'my-first-ember-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _myFirstEmberAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_myFirstEmberAppConfigEnvironment['default'].APP.name, _myFirstEmberAppConfigEnvironment['default'].APP.version)
  };
});
define('my-first-ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('my-first-ember-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('my-first-ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('my-first-ember-app/initializers/export-application-global', ['exports', 'ember', 'my-first-ember-app/config/environment'], function (exports, _ember, _myFirstEmberAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_myFirstEmberAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _myFirstEmberAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_myFirstEmberAppConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('my-first-ember-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('my-first-ember-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('my-first-ember-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("my-first-ember-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('my-first-ember-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
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
define('my-first-ember-app/routes/sebastian', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('my-first-ember-app/routes/students', ['exports', 'ember'], function (exports, _ember) {

  var students = [{
    id: 1,
    name: 'Magdalena Tamara Wimmer',
    gender: 'female',
    description: 'Magda likes Frontend Development.',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12729083_10205984104023968_4668433855843389882_n.jpg?oh=afcdafa65a0523da22de81f2de238d4a&oe=578783C2'
  }, {
    id: 2,
    name: 'Alexander Gabriel',
    gender: 'male',
    description: 'Alex doesn`t know nothing.',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/10423729_10206470021606420_7244174988927505768_n.jpg?oh=301ffc8bc469f48d40590feafe95a46d&oe=57516595'
  }, {
    id: 3,
    name: 'Daniel Trojer',
    gender: 'unclear',
    description: 'Daniel loves Node.js',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-frc1/t31.0-8/10828159_10202269960910986_7094545101889110841_o.jpg'
  }, {
    id: 4,
    name: 'Sebastian Huber',
    gender: 'male',
    description: 'I`m no programmer, I`m just cleaning here',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11707477_10204503789581424_6205927758001485352_n.jpg?oh=1edffa7ccf4452a8da8bdf50f2e0d114&oe=575A7149'
  }, {
    id: 5,
    name: 'Konrad Kleeberger',
    gender: 'male',
    description: 'Hello I`m a lexicon',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-xap1/t31.0-8/893401_548759795158118_1219768549_o.jpg'
  }, {
    id: 6,
    name: 'Josef Krabath',
    gender: 'male',
    description: 'Hier steht nichts sinnvolles',
    picture: 'https://scontent.xx.fbcdn.net/hphotos-xft1/t31.0-8/11999549_962882093735178_3056537859652210155_o.jpg'
  }];

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return students;
    }
  });
});
define('my-first-ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("my-first-ember-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "my-first-ember-app/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("my-first-ember-app/templates/components/template-test", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "my-first-ember-app/templates/components/template-test.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "style", "color:#568EC5;");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Sex: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Hobby:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "style", "width:250px;");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("\n  Poke ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10]);
        var element1 = dom.childAt(fragment, [13]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [8]), 0, 0);
        morphs[4] = dom.createAttrMorph(element0, 'src');
        morphs[5] = dom.createAttrMorph(element0, 'alt');
        morphs[6] = dom.createElementMorph(element1);
        morphs[7] = dom.createMorphAt(element1, 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["content", "student.name", ["loc", [null, [2, 27], [2, 43]]]], ["content", "student.gender", ["loc", [null, [3, 8], [3, 26]]]], ["content", "student.description", ["loc", [null, [5, 3], [5, 26]]]], ["attribute", "src", ["concat", [["get", "student.picture", ["loc", [null, [6, 33], [6, 48]]]]]]], ["attribute", "alt", ["concat", [["get", "student.name", ["loc", [null, [6, 59], [6, 71]]]]]]], ["element", "action", ["poke", ["get", "student.name", ["loc", [null, [8, 24], [8, 36]]]]], [], ["loc", [null, [8, 8], [8, 38]]]], ["content", "student.name", ["loc", [null, [9, 7], [9, 23]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("my-first-ember-app/templates/sebastian", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 35
          }
        },
        "moduleName": "my-first-ember-app/templates/sebastian.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Hello my name is Sebastian");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("my-first-ember-app/templates/students", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "my-first-ember-app/templates/students.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "template-test", [], ["student", ["subexpr", "@mut", [["get", "astudent", ["loc", [null, [6, 28], [6, 36]]]]], [], []]], ["loc", [null, [6, 4], [6, 38]]]]],
        locals: ["astudent"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "my-first-ember-app/templates/students.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("All the crazy students");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "students");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]], ["block", "each", [["get", "model", ["loc", [null, [5, 10], [5, 15]]]]], [], 0, null, ["loc", [null, [5, 2], [7, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('my-first-ember-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'my-first-ember-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("my-first-ember-app/app")["default"].create({"name":"my-first-ember-app","version":"0.0.0+cd1d6653"});
}

/* jshint ignore:end */
//# sourceMappingURL=my-first-ember-app.map