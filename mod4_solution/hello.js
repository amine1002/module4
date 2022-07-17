(function(window) {

    var hello = {};

    var Word = "Hello";

    hello.speak = function(name) {
        console.log(Word + " " + name);
    }
    window.hello = hello;

})(window);