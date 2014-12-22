/* global PhotoSwipe */
/* global PhotoSwipeUI_Default */

import Ember from 'ember';

var run = Ember.run;

export default Ember.Component.extend({

  onInsert: Ember.on('didInsertElement', function() {

    this.set('pswpEl', this.$('.pswp')[0]);

    var reqOpts = {
      // history breaks routing
      history: false
    };

    var options = Ember.merge(reqOpts, this.get('options') || {});
    this.set('options', options);

    if (this.get('items')) {
      this._initItemGallery();
    }
  }),

  _initItemGallery: function() {
    this.set('gallery', new PhotoSwipe(
      this.get('pswpEl'),
      PhotoSwipeUI_Default,
      this.get('items'),
      this.get('options')
    ));
    this._reInitOnClose();
  },

  _reInitOnClose: function() {
    var component = this;
    this.get('gallery').listen('close', function() {
      run.next(function() {
        component._initItemGallery();
      });
    });
  }
});
