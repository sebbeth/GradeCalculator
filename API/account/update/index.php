<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
header('Content-Type: application/json');


include '../database.php'; // database connection configuration, instantiates $pdo

$username = $_POST['user']; // Prepare input
$username = $_POST['user']; 

?>
