/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

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

    app.import(psDir + '/dist/photoswipe.js');
    app.import(psDir + '/dist/photoswipe-ui-default.min.js');
    app.import(psDir + '/dist/photoswipe.css');
    app.import(psDir + '/dist/default-skin/default-skin.css');
    //app.import(psDir + '/dist/default-skin/default-skin.svg');

  },
  // modules 'History' <-- we dont want
  //'Controller', DesktopZoom,

  treeForPublic: function(tree) {
    var svgPath = path.join(this.app.bowerDirectory, 'photoswipe', 'dist', 'default-skin');

    var publicTree = this.pickFiles(this.treeGenerator(svgPath), {
      srcDir: '/',
      destDir: '/assets'
    });

    return publicTree;
  }
};
