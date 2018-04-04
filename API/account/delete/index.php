<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
//header('Content-Type: application/json');


include '../../database.php'; // database connection configuration, instantiates $pdo

$username = $_POST['user']; // Prepare query input
$output = array();

// Get the account data.
$stmt = $pdo->prepare('DELETE FROM `accounts` WHERE username = :username');
$stmt->execute(['username' => $username]);

$output = $stmt->fetch(); // Store result in output

  echo json_encode($output);

?>
