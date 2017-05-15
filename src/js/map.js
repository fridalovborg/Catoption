var currentLocation, infoWindow;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12
	});

	infoWindow = new google.maps.InfoWindow();
	var $myMarker;
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(function(position) { //getCurrentPosition

			// MY POSITION COORDS
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			// MY POSITIONS MARKER
			var an = google.maps.Animation.DROP;
			if ($myMarker) {
				$myMarker.setPosition(pos);
			} else {
				$myMarker = new google.maps.Marker({
					position: pos,
					animation: an,
					map: map
				});
			}
			// INFO BOX FOR MY POSITION
			google.maps.event.addListener($myMarker, 'click', function() {
				var txt = '<strong>' + 'You are here!' + '</strong><br>';
				txt;

				infoWindow.setContent(txt);
				infoWindow.open(map, this);
			});

			map.setCenter(pos);

			var request = {
				location: pos,
				radius: '50000',
				keyword: 'cat_shelter'
			};

			var services = new google.maps.places.PlacesService(map);
			services.nearbySearch(request, showPlaces);

		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// BROWSER DO NOT SUPPORT GEOLOCATION
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function showPlaces(results, status) {
	if(status == google.maps.places.PlacesServiceStatus.OK) {
		for(var i = 0; i<results.length; i++) {
 			addMarker(results[i]);
 			console.log(results[i]);
 		}
 	}
}

function addMarker(place) {
	var an = google.maps.Animation.DROP;
	var marker = new google.maps.Marker({
		map: map,
		animation: an,
		position: place.geometry.location,
		icon: '../src/img/icon.png'
	});

	google.maps.event.addListener(marker, 'click', function() {
		var txt = "<strong>" + place.name + "</strong><br>";
		txt += place.vicinity;

		infoWindow.setContent(txt);
		infoWindow.open(map, this);
	});
}