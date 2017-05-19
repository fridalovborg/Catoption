<?php $db = new PDO('mysql:host=localhost;dbname=catoptionDB', 'root', '');
$patCat = $db
	->query('SELECT value FROM theCounter WHERE id = 1')
	->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($patCat); ?>
