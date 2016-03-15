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
},{
  id: 3,
  name: 'Daniel Trojer',
  gender: 'unclear',
  description: 'Daniel loves Node.js',
  picture: 'https://scontent.xx.fbcdn.net/hphotos-frc1/t31.0-8/10828159_10202269960910986_7094545101889110841_o.jpg'
},{
  id: 4,
  name: 'Sebastian Huber',
  gender: 'male',
  description: 'I`m no programmer, I`m just cleaning here',
  picture: 'https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11707477_10204503789581424_6205927758001485352_n.jpg?oh=1edffa7ccf4452a8da8bdf50f2e0d114&oe=575A7149'
},{
  id: 5,
  name: 'Konrad Kleeberger',
  gender: 'male',
  description: 'Hello I`m a lexicon',
  picture: 'https://scontent.xx.fbcdn.net/hphotos-xap1/t31.0-8/893401_548759795158118_1219768549_o.jpg'
},{
  id: 6,
  name: 'Josef Krabath',
  gender: 'male',
  description: 'Hier steht nichts sinnvolles',
  picture: 'https://scontent.xx.fbcdn.net/hphotos-xft1/t31.0-8/11999549_962882093735178_3056537859652210155_o.jpg'
}];

export default Ember.Route.extend({
  model() {
    return students;
  }
});
