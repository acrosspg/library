var randomposts_number = 5;
var randomposts_chars = 0;
var randomposts_details = 'no';
var randomposts_comments = 'Comments';
var randomposts_commentsd = 'Comments Disabled';
var randomposts_current = [];
var total_randomposts = 0;
var randompoststhumb = 0;
var randomposts_current = new Array(randomposts_number);

function randomposts(json) {
    total_randomposts = json.feed.openSearch$totalResults.$t
}
document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts\"><\/script>');

function getvalue() {
    for (var i = 0; i < randomposts_number; i++) {
        var found = false;
        var rndValue = get_random();
        for (var j = 0; j < randomposts_current.length; j++) {
            if (randomposts_current[j] == rndValue) {
                found = true;
                break
            }
        };
        if (found) {
            i--
        } else {
            randomposts_current[i] = rndValue
        }
    }
};

function get_random() {
    var ranNum = 1 + Math.round(Math.random() * (total_randomposts - 1));
    return ranNum
};

function random_posts(json) {
    for (var i = 0; i < randomposts_number; i++) {
        var entry = json.feed.entry[i];
        var randompoststitle = entry.title.$t;
        if ('content' in entry) {
            var randompostsnippet = entry.content.$t
        } else {
            if ('summary' in entry) {
                var randompostsnippet = entry.summary.$t
            } else {
                var randompostsnippet = "";
            }
        };
         for (var j = 0; j < entry.link.length; j++) {
           if (entry.link[j].rel == 'alternate') {
                var randompostsurl = entry.link[j].href;
                var randomposts_date = entry.published.$t;
               }
        };
document.write('<li>');
        document.write('<div><a href="' + randompostsurl + '" rel="nofollow">' + randompoststitle + '</a></div>');

            document.write('<div style="clear:both"></div></li>')
    }
};
getvalue();
for (var i = 0; i < randomposts_number; i++) {
    document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts\"><\/script>')
};
