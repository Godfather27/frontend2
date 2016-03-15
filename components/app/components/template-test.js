import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  classNames: ['test-class'],
  actions: {
    poke: function(data) {
      alert("you poked "+data)
    }
  },
  click(){
    if(this.element.style.background === "rgb(225, 236, 255)" || this.element.style.background === ""){
      this.element.style.background = "#F8C7C7";
    }
    else{
      this.element.style.background = "#E1ECFF";
    }
  }
});
