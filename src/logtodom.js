(function () {
    "use strict";
    
    var console = {};
    console.log = function (text) {
        $('#log').append(
            $('<blockquote />').html(text)
                .addClass('hoverable'));
    }

    window.console.log = console.log;

    window.onerror = function (msg, url, line) {
        console.log(msg);
    }
})()