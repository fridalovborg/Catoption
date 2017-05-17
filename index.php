<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Catoption - adopt dont shop">
	<meta name="author" content="Catoption Team">
	<link rel="icon" type="image/png" sizes="96x96" href="src/img/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Catoption</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
	<script src="https://use.fontawesome.com/9af20410fa.js"></script>
</head>
<body>
	<!-- <audio id="sound" autoplay="autoplay" src="abba.mp3"></audio>  -->
	<div class="intro-page" id="intro-page" style="display: none;"> <!-- display: none; -->
		<div class="intro-txt">
			<h1>Logo here!</h1>
			<h2>Turn up your sound <i id="icon" class="fa fa-volume-down" aria-hidden="true"></i></h2>
		</div>
	</div>
	<main id="main-page">
		<header>
			<a href="#home" onclick="navHome()" class="home">#CATOPTION
				<?php //include 'src/img/logotype.svg'; ?>
			</a>
			<div class="header">
				<h3 id="sound-btn" class="audio-btn"><i id="sound-icon" class="fa fa-volume-off"></i></h3>
				<a href="#instagram" onclick="navInsta()" class="instagram"><i class="fa fa-instagram"></i></a>
				<a href="#map" onclick="navMap()" class="map"><i class="fa fa-map-marker"></i></a>
				
				<!-- TA INTE BORT NÅGONTING / FRIDA -->
				<!-- <h2><i class="fa fa-volume-off"></i></h2>
				<h2 onclick="navInsta()" class="instagram"><i class="fa fa-instagram"></i></h2> 
				<h2 onclick="navMap()" class="map"><i class="fa fa-map-marker"></i></h2> -->

			</div> <!-- .header -->
		</header>
		
		<!--addera data-anchor="home" samt a href #home i meny-->
		<div id="home-page" data-anchor="home" class="home-page pages">
			<div class="svg-bubble">
				<?php include 'src/img/chatbubble.svg'; ?>
			</div> <!-- .svg-bubble -->
			<div class="svg-cat">
				<?php //include 'src/img/cat.svg'; ?>
			</div> <!-- .svg-cat -->
		</div> <!-- #home-page, .home-page, .pages -->

		<div id="insta-page" class="insta-page pages">
			<div id="img-container" class="img-container"></div> <!-- .img-container -->
		</div> <!-- #insta-page, .insta-page, .pages -->

		<div id="map-page" data-anchor="map" class="map-page pages">
			<div id="the-map" class="the-map"></div> <!-- .the-map -->
		</div> <!-- #map-page, .map-page, .pages -->
	</main> <!-- #main-page -->
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="greensock/src/minified/TweenMax.min.js"></script>
<script src="src/js/script.js"></script>
<script src="src/js/animation.js"></script>
<script src="src/js/map.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcWLN5wfY8TTNInU0jbCXlF6q4xUODTxY&libraries=places&callback=initMap" type="text/javascript" async></script>
</html>