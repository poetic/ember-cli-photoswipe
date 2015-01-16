import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        href: 'http://placekitten.com/g/600/450',
        width: 600, height: 450,
        alt: 'Image Description'
      },
      {
        href: 'http://placekitten.com/630/600',
        width: 630, height: 600,
        alt: 'kitty'
      },
      {
        href: 'http://placekitten.com/g/450/450',
        width: 450, height: 450,
        alt: 'more kitty'
      },
      {
        href: 'http://placekitten.com/g/400/600',
        width: 400, height: 600,
        alt: 'more more kitty'
      },
      {
        href: 'http://placekitten.com/g/500/400',
        width: 500, height: 400,
        alt: 'yup... kitty'
      }
    ];
  }
});

