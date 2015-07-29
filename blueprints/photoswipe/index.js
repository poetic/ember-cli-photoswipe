'use strict';

var fs    = require('fs');

var PHOTOSWIPE_VERSION = '4.0.6';

module.exports = {

  description: 'Adds Photoswipe lib from bower and generate custom src',

  normalizeEntityName: function() {/* generator with no args */},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('photoswipe', PHOTOSWIPE_VERSION);
  }

};
