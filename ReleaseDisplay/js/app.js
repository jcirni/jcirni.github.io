var main = function () {
    "use strict";
    
    var url = "http://www.stellarbiotechnologies.com/media/press-releases/json";
    
    $.getJSON(url, function (pressReleases) {
        
        
        pressReleases.news.forEach(function (headline) { 
            var $h2 = $("<h2>");
            var $p = $("<p>");
            //console.log(headline.title + ", " + headline.published);
            $h2.text(headline.title);
            $p.text(headline.published);
            $("main .releases").append($h2);
            $("main .releases").append($p);
            //$h2.text("");
            //$p.text("");
        });
        //console.log(pressReleases);
    });
};



$(document).ready(main);