"use strict";

$(document).ready(function() {

  let scroll_start = 0;
  let menuClass = 'ml-shrinked-menu'

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();

    if (scroll_start > 30) {
      $('#ml-navbar').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
      $('#ml-navbar').addClass('shrinked-menu');
      $('#ml-navbar').addClass(menuClass);

    } else {
      $('#ml-navbar').css('box-shadow', 'none');
      $('#ml-navbar').removeClass('shrinked-menu');
      $('#ml-navbar').removeClass(menuClass);
    }
  });
});

function initMap() {
  var myLatLng = {lat: 45.92217756320848, lng: 4.585443285185264};

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: [
      { elementType: "geometry",
        stylers: [
          { color: "#f5f5f5" }
        ]
      },
      { elementType: "labels.icon",
        stylers: [
          { visibility: "off" }
        ]
      },
      { elementType: "labels.text.fill",
        stylers: [
          { color: "#616161" }
        ]
      },
      { elementType: "labels.text.stroke",
        stylers: [
          { color: "#f5f5f5" }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#bdbdbd" }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          { color: "#eeeeee" }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#757575" }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          { color: "#e5e5e5" }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#9e9e9e" }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { color: "#ffffff" }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#757575" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          { color: "#dadada" }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#616161" }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#9e9e9e" }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          { color: "#e5e5e5" }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          { color: "#eeeeee" }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { color: "#c9c9c9" }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#9e9e9e" }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: '/img/marker.png',
    title: ''
  });
}
