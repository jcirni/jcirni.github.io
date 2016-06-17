var main = function () {
    "use strict";
    
   
    
    //control api output with limit & offset
     var limit = 10,
        offset = 0;
    
    var url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
    
    //Call StellBioTech NewsRelease
    $.getJSON(url, function (pressReleases) {
        
        
        pressReleases.news.forEach(function (headline) { 
            var $h2 = $("<h2>"),
                $p = $("<p>");
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