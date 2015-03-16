import Ember from 'ember';

export default Ember.Controller.extend({
  // example 1
  psOpts: {
    index: 1
  },

  items: [
    {
      src: 'http://placekitten.com/g/600/400',
      w: 600,
      h: 400,
      title: 'whooa'
    },
    {
      src: 'http://placekitten.com/g/1200/900',
      w: 1200,
      h: 900
    }
  ],

  // actions
  actions: {
    initGallery: function() {
      this.get('myGallery').init();
    }
  },

  psTwoOpts: {
    hideShare: true
  }
});
