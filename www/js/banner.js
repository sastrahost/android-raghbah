$.getJSON( "http://news.dicoba.net/api/banner/image_android", function( data ) {
$(data).each(function() {
    var output = "<img style='width:100%;height:60px;' src='" + data.name + "'>";
    $('#banner').append(output);
});
});
