var main = function () {
    "use strict";
    
    var url = "http://www.stellarbiotechnologies.com/media/press-releases/json";
    
    $.getJSON(url, function (pressReleases) {
        pressReleases.news.forEach(function (headline) { 
            console.log(headline.title + ", " + headline.published);
        });
        //console.log(pressReleases);
    });
};



$(document).ready(main);