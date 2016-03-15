import Ember from 'ember';

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
}];

export default Ember.Route.extend({
  model() {
    return students;
  }
});
