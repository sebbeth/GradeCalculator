<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
header('Content-Type: application/json');


include '../database.php'; // database connection configuration, instantiates $pdo

$username = $_GET['user']; // Prepare query input

$stmt = $pdo->prepare('SELECT username,fullname,unitsCompleted,GPA,program FROM accounts WHERE username = :username');
$stmt->execute(['username' => $username]);
while ($row = $stmt->fetch())
{
  echo json_encode($row);
}
$data = array(
    "0" => array("username" => $username,
    "fullname" => "Sebastian Brown",
    "unitsCompleted" => "80",
    "GPA" => "6.2",
    "institutionName" => "University of Newcastle",
    "courses" => array(
    "0" => array( "title" => "SENG2050",
    "currentPercent" => "80",
    "currentGrade" => "Distinction",
    "percentMarked" => "70",
    "courseItems" => null)
    )));

//echo json_encode($data);
?>
