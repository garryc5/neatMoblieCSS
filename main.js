var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 30.281100, lng: -97.737290},
  zoom: 12,
  disableDefaultUI: true,
  fullscreenControl: true
  });

  var marker = new google.maps.Marker({
  position: {lat: 30.281100, lng: -97.737290},
  map: map,
  title: 'Hello World!'
});

  var panorama = new google.maps.StreetViewPanorama(
  document.getElementById('pano'),{
  position: {lat: 30.281100, lng: -97.737290},
  });

map.setStreetView(panorama);
}