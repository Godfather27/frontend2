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