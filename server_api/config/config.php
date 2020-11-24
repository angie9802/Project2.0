<?php

define( 'DB_NAME', 'embebidos');
define( 'DB_USER', 'emb2020');
define( 'DB_PASSWORD', 'EmbebidoS');
//define( 'DB_HOST', "aulal.org:3306");
define( 'DB_HOST', 'aulal.org');
//define( 'DB_PORT', '3306');

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
//$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, 3306);

?>