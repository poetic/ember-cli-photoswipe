import Ember from 'ember';

export default Ember.View.extend({

  initialize: Ember.on('didInsertElement', function() {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
      {
        src: 'http://placekitten.com/g/600/400',
        w: 600,
        h: 400
      },
      {
        src: 'http://placekitten.com/g/1200/900',
        w: 1200,
        h: 900
      }
    ];

    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  })



});
