'use strict';

var fs    = require('fs');
var chalk = require('chalk');

var PHOTOSWIPE_VERSION = '4.0.1';

module.exports = {

  description: 'Adds Photoswipe lib from bower and generate custom src',

  normalizeEntityName: function() {/* generator with no args */},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('photoswipe', PHOTOSWIPE_VERSION)
      .then(this.buildPhotoswipeFromSource.bind(this, options));
  },

  buildPhotoswipeFromSource: function(options) {
    // we need to make a build without the history module.
    var fsDir = options.project.bowerDirectory  + '/photoswipe';

    if (!fs.existsSync(fsDir)) {
      var msg = 'photoswipe was not found on the bower_components directory. ';
      msg    += 'Please run `bower install --save photoswipe#' + PHOTOSWIPE_VERSION + '` manually first.';
      throw new Error(msg);
    }

    var fsFile   = fsDir + '/dist/photoswipe-ember.js';
    var srcFiles = [
      'framework-bridge',
      'core',
      'down-move-up-handlers',
      'items-controller',
      'tap',
      'desktop-zoom'
      //'history'
    ];
    var newContents = "(function (root, factory) { \n"+
      "\tif (typeof define === 'function' && define.amd) {\n" +
        "\t\tdefine(factory);\n" +
      "\t} else if (typeof exports === 'object') {\n" +
        "\t\tmodule.exports = factory();\n" +
      "\t} else {\n" +
        "\t\troot.PhotoSwipe = factory();\n" +
      "\t}\n" +
    "})(this, function () {\n\n" +
      "\t'use strict';\n"+
      "\tvar PhotoSwipe = function(template, UiClass, items, options){\n";

    srcFiles.forEach(function(name) {
      newContents += fs.readFileSync(fsDir + '/src/js/' + name + '.js');
    });

    newContents+= "\tframework.extend(self, publicMethods); };\n";
    newContents+= "\treturn PhotoSwipe;\n";
    newContents+= "});";

    fs.writeFileSync(fsFile, newContents);

    // done!
    console.log(chalk.green('\n[ember-cli-photoswipe]: Done!'));
  }
};
