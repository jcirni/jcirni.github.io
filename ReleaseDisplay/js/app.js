function moreHeadlines(strAPI) {
    "use strict";
    //Call StellBioTech NewsRelease
    $.getJSON(strAPI, function (pressReleases) {

        pressReleases.news.forEach(function (headline) {
            var $pandiv = $('<div class="panel panel-default">'),
                $h2 = $("<h2>"),
                $p = $("<p>");
            //console.log(headline.title + ", " + headline.published);
            $h2.text(headline.title);
            $p.text(headline.published);
            $(".releases").append($pandiv);
            $pandiv.append($h2);
            $pandiv.append($p);
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
        status = false,
        url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
        
    moreHeadlines(url);
    
    //on end of document, load more headlines
    win.scroll(function () {
        console.log($(document).height() - win.height() - win.scrollTop());
        if ($(document).height() - win.height() === win.scrollTop()) {
            offset += 5;
            limit = 5;
            url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
            //request more headlines at new offset
            moreHeadlines(url);
        }
        
    });
    
};

$(document).ready(main);