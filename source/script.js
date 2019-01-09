var map;
var myCenter = new google.maps.LatLng(-3.7937466,-38.5779125);
var marker;
var infowindow;
var track;

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggableCursor: 'default'
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function saveMarker() {
  track = marker.getPosition().lat()+", "+marker.getPosition().lng();
  console.log(track);
}

function placeMarker(location) {
  if (!marker || !marker.setPosition) {
    marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  } else {
    marker.setPosition(location);
  }
  if (!!infowindow && !!infowindow.close) {
    infowindow.close();
  }
  infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map, marker);
}
