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
        didScroll = false,
        $win = $(window),
        url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();

    moreHeadlines(url);
    
    //on end of document, load more headlines
    $win.scroll(function () {
        didScroll = true;
    });
    
    setInterval(function() {
    //check if near end of dom
        if ( didScroll ) {
            didScroll = false;
        
            if ($win.scrollTop() + $win.height() > $(document).height() - 150) {
                offset += 5;
                limit = 5;
                url = "http://www.stellarbiotechnologies.com/media/press-releases/json?limit=" + limit.toString() + "&offset=" + offset.toString();
                //request more headlines at new offset
                moreHeadlines(url);
            }
        }
   //end if
    }, 100);
    
};

$(document).ready(main);