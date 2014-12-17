module.exports = {

  description: 'Adds Photoswipe lib to project from bower.',

  normalizeEntityName: function() {/* generator with no args */},

  afterInstall: function() {
    return this.addBowerPackageToProject('photoswipe', '4.0.1');
  }

};
