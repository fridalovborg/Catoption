<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Catoption - adopt dont shop">
	<meta name="author" content="Catoption Team">
	<!--<link rel="icon" type="image/png" sizes="96x96" href="src/img/favicon-96x96.png">-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Catoption</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
	<script src="https://use.fontawesome.com/9af20410fa.js"></script>
</head>
<body>
	<button class="audio-btn"><i id="audioIcon" class="fa fa-pause" aria-hidden="true"></i></button>  
	<audio id="song" autoplay="autoplay" src="abba.mp3"></audio>
	<div class="load-page" id="load-page" style=""> <!-- display: none; -->
		<div class="txt">
			<h1>Logo here!</h1>
			<h2>Turn up your sound <i id="icon" class="fa fa-volume-down" aria-hidden="true"></i></h2>
		</div>
	</div>
	<main id="main-page">
		<header>
			<h2 onclick="scrollOne()" class="home">Logotype</h2>
			<div class="header">
				<h2 onclick="scrollTwo()" class="instagram">Instagram</h2>
				<h2 onclick="scrollThree()" class="contact">Contact</h2>
			</div> <!-- .header -->
		</header>
		<div id="home-page" class="home-page page">
			<!-- <h3>CAMPAIN PAGE</h3> -->
			<div class="svg-cat">
				<?php include 'src/img/cat.svg'; ?>
			</div>
		</div> <!-- #home-page, .home-page, .page -->
		<div id="insta-page" class="insta-page page">
			<h3>INSTAGRAM PAGE</h3>

			<div id ="img-container" class="img-container">
			</div> <!-- .img-container -->
		</div> <!-- #insta-page, .insta-page, .page -->
		<div id="contact-page" class="contact-page page">
			<h3>CONTACT PAGE</h3>
		</div> <!-- #contact-page, .contact-page, .page -->
	</main>
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="greensock/src/minified/TweenMax.min.js"></script>
<script src="js/all.js"></script>
</html>