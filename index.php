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
</head>
<body>
	<div class="load-page">
		
	</div>
	<main>
		<div class="header">
			<h2 onclick="scrollOne()" class="home">Logotype</h2>
			<h2 onclick="scrollOne()" class="home">Campain</h2>
			<h2 onclick="scrollTwo()" class="instagram">Instagram</h2>
			<h2 onclick="scrollThree()" class="contact">Contact</h2>
		</div> <!-- .header -->
		<div id="home-page" class="home-page page">
			<!-- <h3>CAMPAIN PAGE</h3> -->
			<?php include 'src/img/cat.svg'; ?>
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
<script src="js/all.js"></script>
</html>