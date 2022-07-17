(function(window) {
    var bye = {};

    var Word = "Good Bye";

    bye.speak = function(name) {
        console.log(Word + " " + name);
    }

    window.bye = bye;

})(window);