function moreHeadlines(strAPI) {
    "use strict";
    //Call StellBioTech NewsRelease
    $.getJSON(strAPI, function (pressReleases) {

        pressReleases.news.forEach(function (headline) {
            var $panel = $('<div class="panel panel-default">'),
                $h2 = $("<h2>"),
                $p = $("<p>");
            $panel.hide();
            $h2.text(headline.title);
            $p.text(headline.published);
            $panel.append($h2);
            $panel.append($p);
            $(".releases").append($panel);
            $panel.fadeIn();
        });
  
        
    });
}

var main = function () {
    "use strict";
    //control api output with limit & offset
    var limit = 10,
        offset = 0,
        $win = $(window),
        url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();

    moreHeadlines(url);
    
    //on end of document, load more headlines
    $win.scroll(function () {
        if ($win.scrollTop() + $win.height() > $(document).height() - 150) {
            offset += 10;
            limit = 10;
            url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
            //request more headlines at new offset
            moreHeadlines(url);
        }
        
    });
    
};

$(document).ready(main);