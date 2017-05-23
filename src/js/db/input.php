<?php $db = new PDO('mysql:host=server5.serverdrift.com;dbname=annakils_catoption', 'annakils_cat', 'catoption2018');
$db->exec('UPDATE theCounter SET value = (value + 1) WHERE id = 1');
// server5.serverdrift.com = host
// annakils_catoption = dbname
// annakils_cat = användare
// catoption2018 = lösen