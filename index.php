<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Kampanj</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="header">
		<h2 id="home">Logotyp</h2>
		<h2 id="page-one">Kampain</h2>
		<h2 id="page-two">About</h2>
		<h2 id="page-three">Contact</h2>
	</div>
	<div id="fullpage">
		<div id="onePage" data-page="page-one" class="onePage page">
			<h3>Detta är första sidan</h3>
		</div>
		<div id="secondPage" class="secondPage page">
			<h3>Detta är andra sidan</h3>
		</div>
		<div id="thirdPage" class="thirdPage page">
			<h3>Detta är tredje sidan</h3>
		</div>
	</div>
	<div class="instagram">
		<?php
		/**
		* @TODO: Lägg till logik för att hantera tömning av cache / hantering av borttagen fil.
		*/

		$timeout = 1; // Timeout in seconds
		$lastCache = file_get_contents("cache_time.txt"); // När uppdaterades senast cachen?

		if ($lastCache + $timeout < time() ) { // Har det gått <timeout> tid?
		    file_put_contents("cache_time.txt", time());
		    $url = "https://www.instagram.com/explore/tags/wwfstoltfadder/?__a=1";
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
	</div>
</body>
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="js/all.js"></script>
</html>