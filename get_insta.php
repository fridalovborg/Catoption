<?php
/* ----------------------------------------------------------------------------
                INSTAGRAM API
---------------------------------------------------------------------------- */
$timeout = 1;
$lastCache = file_get_contents('cache_time.txt');

if ($lastCache + $timeout < time() ) { // Har det gått <timeout> tid?
    file_put_contents('cache_time.txt', time());
    $url = 'https://www.instagram.com/explore/tags/cats/?__a=1';
    // @ framför undertrycker felmeddelanden
    @$data = file_get_contents($url);
    // Skriv bara om cache om API:et svarar. Annars behåll den gamla cachen.
    if ($data)
        file_put_contents('cache.txt', $data);
}

$data = json_decode(file_get_contents('cache.txt'));
for ($i = 0; $i < 18; $i++) {
	echo '<div class="img-cont">';
    echo '<img id="likes" src="'.$data->tag->media->nodes[$i]->thumbnail_src.'">';
    echo '</div>';
} ?>