<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Catoption - adopt dont shop">
	<meta name="author" content="Catoption Team">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="icon" type="image/png" sizes="96x96" href="src/img/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Catoption</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
	<script src="https://use.fontawesome.com/9af20410fa.js"></script>
	<link rel="stylesheet" href="src/img/font-awesome-4.7.0/css/font-awesome.css">
</head>
<body>
	<audio id="paw-sound" preload="none" src="audio/highfive.m4a"></audio>
	<audio id="purr" preload="none" src="audio/catpurr.mp3"></audio>
	<audio id="sound" src="audio/catsong.mp3" autoplay loop></audio> 
	<div class="intro-page" id="intro-page" style=""> <!-- display: none; -->
		<div class="intro-txt">
			<div class="cat-logotype"> <?php include 'src/img/logotype.svg'; ?> </div>
			<h2 class="pulse-txt">Turn up your sound <i id="icon" class="fa fa-volume-down" aria-hidden="true"></i></h2>
		</div>
	</div>
	<main id="main-page">
		<header>
			<a href="#home" class="home">#CATOPTION</a>
				<div id="sound-btn" onclick="audioBtn()" class="audio-btn"><i id="sound-icon" class="fa fa-volume-off"></i></div>
				<a href="#instagram" class="instagram fa"></a>
				<a href="#map" class="map fa"></a>
		</header>

		<div id="home" class="home-page pages">
			<div class="svg-bubble" id="bubble-div">
                <div id="bubble1"><?php include 'src/img/chatbubble.svg'; ?></div>
                <div id="bubble2"><?php include 'src/img/chatbubble2.svg'; ?></div>
                <div id="bubble3"><?php include 'src/img/chatbubble3.svg'; ?></div>
            </div> <!-- .svg-bubble -->
			<div class="svg-cat">
				<?php include 'src/img/cat.svg'; // require __DIR__ . skriva såhär? ?> 
			</div> <!-- .svg-cat -->
			<div id="cnt" class="the-counter">
				<h4 id="counter"></h4><h4> PAT THE CAT</h4> 
			</div> <!-- #cnt, .the-counter -->
		</div> <!-- #home-page, .home-page, .pages -->
	
		<div id="instagram" class="insta-page pages">
			<h2>Adopt - don't shop!</h2>
			<h3>Use #catoption to show your support and get featured below.</h3>
			<div id="img-container" class="img-container"></div> <!-- .img-container -->
		</div> <!-- #insta-page, .insta-page, .pages -->

		<div id="map" class="map-page pages">
			<h2>Wanna adopt?</h2>
			<h3>Find the nearest cat shelter below!</h3>
			<div id="the-map" class="the-map"></div> <!-- .the-map -->
		</div> <!-- #map-page, .map-page, .pages -->
	</main> <!-- #main-page -->
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="greensock/src/minified/TweenMax.min.js"></script>
<script src="src/js/main.js"></script>
<script src="src/js/animation.js"></script>
<script src="src/js/map.js"></script>
<script src="src/js/ie.js"></script>
<script src="src/js/db/dbconn.js"></script>
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD97mFy6-G4MJo09-7p6h9UmfWKhmRozSY&libraries=places&callback=initMap" type="text/javascript" async></script>
</html>