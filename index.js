/* jshint node: true */
'use strict';

var fs = require('fs');

module.exports = {
  name: 'ember-cli-photoswipe',

  included: function(app) {
    this.app = app;

    var psDir = app.bowerDirectory + '/photoswipe';

    if (!fs.existsSync(psDir)) {
      var msg = 'ember-cli-photoswipe: You need to run ember g photoswipe to ';
      msg += 'install required dependencies for this addon.';
      var err = new Error(msg);
      err.stack = null;
      throw err;
    }
  }
};
