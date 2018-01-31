<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
header('Content-Type: application/json');


include '../database.php'; // database connection configuration, instantiates $pdo

$username = $_GET['user']; // Prepare query input
$output = array();

// Get the account data.
$stmt = $pdo->prepare('SELECT username,fullname,unitsCompleted,GPA,program,email,institutions.institutionName FROM accounts
INNER JOIN institutions ON accounts.institution_id =institutions.id WHERE username = :username');
$stmt->execute(['username' => $username]);

$output = $stmt->fetch(); // Store result in output

// Now get the courses
$output['courses'] = array();

$stmt = $pdo->prepare('SELECT courses.id,courses.code,courses.title,courses.currentPercent,courses.currentGrade,courses.percentMarked,courses.finished FROM accounts
INNER JOIN accounts_courses_relation ON accounts.id = accounts_courses_relation.account_id INNER JOIN courses
ON accounts_courses_relation.course_id = courses.id WHERE username = :username');
$stmt->execute(['username' => $username]);

// Iterate the results row by row.
while ($row = $stmt->fetch())
{

  $row['courseItems'] = array(); // Add a courseItems key to courses array.
  array_push($output['courses'],$row); // Add the course to the courses array.

  // Now get the courseItems


}
//var_dump($output);
  echo json_encode($output);

?>
