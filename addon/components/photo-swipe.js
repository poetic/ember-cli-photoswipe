/* global PhotoSwipe */
/* global PhotoSwipeUI_Default */

import Em from 'ember';

var run = Em.run;

export default Em.Component.extend({

  onInsert: Em.on('didInsertElement', function() {

    Em.run.scheduleOnce('afterRender', this, function() {
      this.set('pswpEl', this.$('.pswp')[0]);
      this.set('pswpTheme', PhotoSwipeUI_Default);

      this._buildOptions();

      // when passing an array of items, we don't need a block
      if (this.get('items')) {
        return this._initItemGallery();
      }
      return this._calculateItems();
    });
  }),

  _buildOptions: function(getThumbBoundsFn) {
     var reqOpts = {
      history: false
    };

    if (Em.isPresent(getThumbBoundsFn)) {
      reqOpts.getThumbBoundsFn = getThumbBoundsFn;
    }

    var options = Em.merge(reqOpts, this.get('options') || {});
    this.set('options', options);
  },

  _initItemGallery: function() {
    this.set('gallery', new PhotoSwipe(
      this.get('pswpEl'),
      this.get('pswpTheme'),
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
  },

  itemObserver: Em.observer('items', function(){
    var component = this;
    component._initItemGallery();
  }),

  click: function(evt) {

    var aElement = this.$(evt.target).parent();
    var index    = this.$("a.photo-item").index( aElement );

    if (!aElement.is('a')) { return; }

    evt.preventDefault();

    // setup options, such as index for index
    this._buildOptions(this._getBounds.bind(this));
    this.set('options.index', index);

    var pSwipe = new PhotoSwipe(
      this.get('pswpEl'),
      this.get('pswpTheme'),
      this.get('calculatedItems'),
      this.get('options')
    );
    this.set('gallery', pSwipe);
    this.get('gallery').init();
  },

  _getBounds: function(i) {
    var img      = this.$('img').get(i),
        position = this.$(img).position(),
        width    = this.$(img).width();
    return {x: position.left, y: position.top, w: width};
  },

  _calculateItems: function() {
    var items           = this.$().find('a');
    var calculatedItems = Em.A(items).map(function(i, item) {
      return {
        src:   Em.$(item).attr('href'),
        w:     Em.$(item).data('width'),
        h:     Em.$(item).data('height'),
        msrc:  Em.$(item).children('img').attr('src'),
        title: Em.$(item).children('img').attr('alt')
      };
    });
    this.set('calculatedItems', calculatedItems);
  }
});
