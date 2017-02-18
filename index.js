/* jshint node: true */
'use strict';

var fs   = require('fs');
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-photoswipe',

  included: function(app) {
    this.app  = app;
    var psDir = app.bowerDirectory + '/photoswipe';

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(psDir + '/dist/photoswipe.css');
      app.import(psDir + '/dist/default-skin/default-skin.css');
      app.import(psDir + '/dist/photoswipe.js');
      app.import(psDir + '/dist/photoswipe-ui-default.min.js');
    }
  },

  treeForPublic: function() {
    var svgPath = path.join(this.app.bowerDirectory, 'photoswipe', 'dist', 'default-skin');
    var publicTree = new Funnel(this.treeGenerator(svgPath), {
      srcDir: '/',
      destDir: '/assets',
      exclude: ['default-skin.css']
    });
    return publicTree;
  }
};
