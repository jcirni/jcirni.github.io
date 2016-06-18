function moreHeadlines(strAPI) {
    //Call StellBioTech NewsRelease
    $.getJSON(strAPI, function (pressReleases) {

        pressReleases.news.forEach(function (headline) {
            var $h2 = $("<h2>"),
                $p = $("<p>");
            //console.log(headline.title + ", " + headline.published);
            $h2.text(headline.title);
            $p.text(headline.published);
            $("main .releases").append($h2);
            $("main .releases").append($p);
        });
        //console.log(pressReleases);
    });
}

var main = function () {
    "use strict";
    
    //control api output with limit & offset
    var limit = 10,
        offset = 0,
        win = $(window),
        url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
    //on end of document, load more headlines
    
    moreHeadlines(url);
    
    win.scroll(function () {
        if ($(document).height() - win.height() === win.scrollTop()) {
            offset += 10;
            
            url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
            //request more headlines at new offset
            moreHeadlines(url);
        }
        
    });
    
};

$(document).ready(main);