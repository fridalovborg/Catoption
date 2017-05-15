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
	<button class="audio-btn" id="show-btn"><i id="audioIcon" class="fa fa-pause" aria-hidden="true"></i></button>  
	<!-- <audio id="song" autoplay="autoplay" src="abba.mp3"></audio> -->
	<div class="load-page" id="load-page" style="display: none;"> <!-- display: none; -->
		<div class="txt">
			<h1>Logo here!</h1>
			<h2>Turn up your sound <i id="icon" class="fa fa-volume-down" aria-hidden="true"></i></h2>
		</div>
	</div>
	<main id="main-page">
		<header>
			<div onclick="scrollOne()" class="home"><?php //include 'src/img/logotype.svg'; ?></div>
			<div class="header">
				<h2 onclick="scrollTwo()" class="instagram">Instagram</h2>
				<h2 onclick="scrollThree()" class="contact">Map</h2>
			</div> <!-- .header -->
		</header>
		<div id="home-page" class="home-page page">
			<div class="svg-bubble">
				<?php include 'src/img/chatbubble.svg'; ?>
			</div>
			<div class="svg-cat">
				<?php include 'src/img/cat.svg'; ?>
			</div>
		</div> <!-- #home-page, .home-page, .page -->
		<div id="insta-page" class="insta-page page">
			<div id ="img-container" class="img-container">
			</div> <!-- .img-container -->
		</div> <!-- #insta-page, .insta-page, .page -->
		<div id="contact-page" class="contact-page page">
			<div id="map" class="map"></div>
		</div> <!-- #contact-page, .contact-page, .page -->
	</main>
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="greensock/src/minified/TweenMax.min.js"></script>
<script src="js/all.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcWLN5wfY8TTNInU0jbCXlF6q4xUODTxY&libraries=places&callback=initMap" type="text/javascript" async></script>
</html>