<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
header('Content-Type: application/json');

$data = array(
    "0" => array("username" => "user", 
    "fullname" => "Sebastian Brown", 
    "unitsCompleted" => "80", 
    "GPA" => "6.2", 
    "institutionName" => "UoN", 
    "courses" => array(
    "0" => array( "title" => "SENG2050",
    "currentPercent" => "80",
    "currentGrade" => "Distinction", 
    "percentMarked" => "70", 
    "courseItems" => null)
    )));

echo json_encode($data);
?>
