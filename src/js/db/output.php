<?php $db = new PDO('mysql:host=server5.serverdrift.com;dbname=annakils_catoption', 'annakils_cat', 'catoption2018');
$patCat = $db
	->query('SELECT value FROM theCounter WHERE id = 1')
	->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($patCat); ?>
