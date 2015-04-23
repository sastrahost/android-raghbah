/*
 * blueimp Gallery Demo JS 2.12.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    $.ajax({
        // Flickr API is SSL only:
        // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
        url: 'http://news.dicoba.net/api/gallery/images/'
        
    }).done(function (result) {
        var carouselLinks = [],
            linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
        $.each(result, function (index ) {
            baseUrl = 'http://news.dicoba.net/media/' + this.media;
            $('<a/>')
                .append($('<img style="width:130px;height:130px;">').prop('src', baseUrl ))
                .prop('href', baseUrl )
                .prop('title', this.title )
                .attr('data-gallery', '')
                .appendTo(linksContainer);
            carouselLinks.push({
                href: baseUrl ,
                title: this.title
            });
        });
        
    });


});
