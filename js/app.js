var submit = document.querySelectorAll(".labcar-submit");
submit.addEventListener("click", calcRoute);

function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var initialLocation = {lat: -23.557445, lng: -46.662063};
  var mapDesk = new google.maps.Map(
    document.getElementById('mapDesktop'), {zoom: 16, center: initialLocation}
  );
  var mapMob = new google.maps.Map(
    document.getElementById('mapMobile'), {zoom: 16, center: initialLocation}
  );
  var markerDesk = new google.maps.Marker({position: initialLocation, map: mapDesk});
  var markerMob = new google.maps.Marker({position: initialLocation, map: mapMob});
  directionsDisplay.setMap(mapDesk);
}

function calcRoute() {
  var start = document.querySelectorAll('.labcar-start').value;
  var end = document.querySelectorAll('.labcar-end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}
