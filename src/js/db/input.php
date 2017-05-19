<?php $db = new PDO('mysql:host=localhost;dbname=catoptionDB', 'root', '');
$db->exec('UPDATE theCounter SET value = (value + 1) WHERE id = 1');