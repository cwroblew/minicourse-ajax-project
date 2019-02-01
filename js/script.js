
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to visit ' + address + '?');

    var streetviewURL = 'https://maps.googleapis.com/maps/api/streetview?key=AIzaSyD3smnubL-rBz_BhA1aH7vPNwT3-Ob7TGc&size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    return false;
}

$('#form-container').submit(loadData);

// loadData();
