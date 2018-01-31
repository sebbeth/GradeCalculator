<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
header('Content-Type: application/json');


include '../database.php'; // database connection configuration, instantiates $pdo

$username = $_GET['user']; // Prepare query input

$output = array();

// Now get the courses
$output = array();

$stmt = $pdo->prepare('SELECT courses.id,courses.code,courses.title,courses.currentPercent,courses.currentGrade,courses.percentMarked,courses.finished FROM accounts
INNER JOIN accounts_courses_relation ON accounts.id = accounts_courses_relation.account_id INNER JOIN courses
ON accounts_courses_relation.course_id = courses.id WHERE username = :username');
$stmt->execute(['username' => $username]);

// Iterate the results row by row.
while ($row = $stmt->fetch())
{

  $row['courseItems'] = array(); // Add a courseItems key to courses array.

  $itemQuery = $pdo->prepare('SELECT course_items.id,course_items.title FROM course_items
  INNER JOIN courses_items_relation ON course_items.id = courses_items_relation.course_item_id
  INNER JOIN courses ON courses_items_relation.course_id = courses.id WHERE courses.id = :id');
  $itemQuery->execute(['id' => $row['id']]);



  while ($itemRow = $itemQuery->fetch())
  {
    //var_dump($itemRow);

    array_push($row['courseItems'],$itemRow); // Add the courseItems to the array.

  }

  array_push($output,$row); // Add the courseItems to the array.

  }

  var_dump($output);
  // Now get the courseItems

    echo json_encode($output);


?>
