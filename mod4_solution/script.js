(function(window) {

    var names = ["Yaakov", "John", "Jean", "Jamel", "Adam", "Pierre", "Harry", "Jino", "Samantha", "Toni"];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            window.bye.speak(names[i]);
        } else {
            window.hello.speak(names[i]);
        }
    }

})(window);