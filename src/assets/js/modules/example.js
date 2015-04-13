(function( example, $, undefined ) {

  'use strict';

  // Private variable for this module only
  var privateVar = "This is a private var";

  // Public variable for anyone
  example.publicVar = "This is a public var";

  // Public Method
  example.init = function() {
    console.log('in example module: init/public function');
    console.log('in example module: ' + privateVar);
    console.log('in example module: ' + example.publicVar);

    privateFunction();
  };

  // Private Method
  function privateFunction() {
    console.log('in example module: private function');
  }
}( window.example = window.example || {}, jQuery ));
