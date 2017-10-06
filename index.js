/* jshint node: true */
'use strict';

var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var path = require('path');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-full-calendar',

  included: function (app) {
    this._super.included(app);
    app.import('vendor/fullcalendar/fullcalendar.min.js');
    app.import('vendor/fullcalendar/fullcalendar.min.css');
    
  },
  treeForVendor(defaultTree) {
    var calendarJS = new Funnel( path.dirname(require.resolve('fullcalendar')), {
      destDir: 'fullcalendar',
      files:['fullcalendar.min.js']});
    var calendarCSS = new Funnel( path.dirname(require.resolve('fullcalendar')), {
        destDir: 'fullcalendar',
        files:['fullcalendar.min.css']});
        
    calendarJS = map(calendarJS, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    

    return new MergeTrees([defaultTree, calendarJS, calendarCSS]);
  }
};
