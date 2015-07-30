import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        src: 'http://placekitten.com/g/600/450',
        w: 600, h: 450,
        title: 'Image Description'
      },
      {
        src: 'http://placekitten.com/630/600',
        w: 630, h: 600,
        title: 'kitty'
      },
      {
        src: 'http://placekitten.com/g/450/450',
        w: 450, h: 450,
        title: 'more kitty'
      },
      {
        src: 'http://placekitten.com/g/400/600',
        w: 400, h: 600,
        title: 'more more kitty'
      },
      {
        src: 'http://placekitten.com/g/500/400',
        w: 500, h: 400,
        title: 'yup... kitty'
      }
    ];
  }
});

