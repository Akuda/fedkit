(function( example, $, undefined ) {
  // Private variable for this module only
  var privateVar = "This is a private var";

  // Public variable for anyone
  example.publicVar = "example module: This is a public var";

  // Public Method
  example.init = function() {
   console.log('example module: init/public function');
  };

  // Private Method
  function privateFunction( el ) {
    alert('this is private!');
  }
}( window.example = window.example || {}, jQuery ));
