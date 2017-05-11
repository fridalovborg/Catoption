<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Adopt a cat</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="header">
		<h2 onclick="scrollOne()" class="home">Logotype</h2>
		<h2 onclick="scrollOne()" class="home">Campain</h2>
		<h2 onclick="scrollTwo()" class="instagram">Instagram</h2>
		<h2 onclick="scrollThree()" class="contact">Contact</h2>
	</div> <!-- .header -->
	<div id="home-page" class="home-page page">
		<h3>CAMPAIN PAGE</h3>
	</div> <!-- #home-page, .home-page, .page -->
	<div id="insta-page" class="insta-page page">
		<h3>INSTAGRAM PAGE</h3>

		<div class="img-container">
			<?php
			/**
			* @TODO: Lägg till logik för att hantera tömning av cache / hantering av borttagen fil.
			*/
			$timeout = 1; // Timeout in seconds
			$lastCache = file_get_contents("cache_time.txt"); // När uppdaterades senast cachen?

			if ($lastCache + $timeout < time() ) { // Har det gått <timeout> tid?
			    file_put_contents("cache_time.txt", time());
			    $url = "https://www.instagram.com/explore/tags/catoption/?__a=1";
			    // @ framför undertrycker felmeddelanden
			    @$data = file_get_contents($url);
			    // Skriv bara om cache om API:et svarar. Annars behåll den gamla cachen.
			    if ($data)
			        file_put_contents("cache.txt", $data);
			}

			$data = json_decode(file_get_contents("cache.txt"));
			for ($i = 0; $i < count($data->tag->media->nodes); $i++) {
			    echo '<img src="'.$data->tag->media->nodes[$i]->thumbnail_src.'">';
			}
			/*echo "<pre>";
			var_dump($data->tag->media->page_info->has_next_page);
			echo "</pre>";
			*/?>
		</div> <!-- .img-container -->
	</div> <!-- #insta-page, .insta-page, .page -->
	<div id="contact-page" class="contact-page page">
		<h3>CONTACT PAGE</h3>
	</div> <!-- #contact-page, .contact-page, .page -->
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="js/all.js"></script>
</html>