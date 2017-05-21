<?php
/**
* @TODO: Lägg till logik för att hantera tömning av cache / hantering av borttagen fil.
*/
$timeout = 1; // Timeout in seconds
$lastCache = file_get_contents("cache_time.txt"); // När uppdaterades senast cachen?

if ($lastCache + $timeout < time() ) { // Har det gått <timeout> tid?
    file_put_contents("cache_time.txt", time());
    $url = "https://www.instagram.com/explore/tags/cats/?__a=1";
    // @ framför undertrycker felmeddelanden
    @$data = file_get_contents($url);
    // Skriv bara om cache om API:et svarar. Annars behåll den gamla cachen.
    if ($data)
        file_put_contents("cache.txt", $data);
}

$data = json_decode(file_get_contents("cache.txt"));
for ($i = 0; $i < 18; $i++) {
    echo '<img id="likes" src="'.$data->tag->media->nodes[$i]->thumbnail_src.'">';
}
/*echo "<pre>";
var_dump($data->tag->media->page_info->has_next_page);
echo "</pre>";
*/?>