// Copyright 2011-2013 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/appinventor-sources/master/mitlicense.txt

/**
 * Unit test for "select list item" block Yail generator
 *
 * Author: Hal Abelson (hal@mit.edu)
 */

////////////////////////////////////////
// These four variables are all you need to define to create a test
////////////////////////////////////////

var expected =
   "     \
   (call-yail-primitive yail-list-get-item        \
          (*list-for-runtime*                     \
             (call-yail-primitive make-yail-list   \
                   (*list-for-runtime*)           \
                   '()                            \
                    \"make a list\") 1)           \
             '(list number)                       \
              \"select list item\")               \
    ";


var delayedGenerator = function () { return Blockly.Yail.lists_select_item ; } ;

var blockName = 'lists_select_item' ;

var doesReturn = true ;

////////////////////////////////////////
// The rest of this page is common to all tests.
////////////////////////////////////////

// PhantomJS page object to open and load an URL - unfortunately we need to fully load Blockly
var page = require('webpage').create();
// Some debugging from PhantomJS
page.onConsoleMessage = function (msg) { console.log(msg); };
page.onError = function (msg, trace) {
  console.log(msg);
  trace.forEach(function(item) {
    console.log('  ', item.file, ':', item.line);
  });
};

var mainTest = require('./generator_test_mainRoutine.js');
mainTest.execute();

