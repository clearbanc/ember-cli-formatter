/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-formatter',
  included: function lightbox_included(app) {
    this._super.included.apply(this, arguments);
    var formatter_path = path.join(app.bowerDirectory, 'formatter', 'dist');

    this.app.import(path.join(formatter_path, 'formatter.min.js'));
  }
};
