module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addAddonToProject('ember-cli-moment-shim');
  }
};
