function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }

  function returnsANamedFunction() {
    // This function returns a named function called 'myNamedFunction'
    return function myNamedFunction() {
      console.log("Hello from the named function!");
    };
  }

  function returnsAnAnonymousFunction() {
    // This function returns an anonymous function
    return function() {
      console.log("Hello from the anonymous function!");
    };
  }
  