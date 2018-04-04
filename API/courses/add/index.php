<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');


include '../../database.php'; // database connection configuration, instantiates $pdo

$user_id = $_POST['user_id']; // Prepare query input
$code = $_POST['code'];
$title = $_POST['title'];
$finished = $_POST['finished'];
$output = array();

// Insert a new course
$stmt = $pdo->prepare('INSERT INTO `courses` (`code`, `title`, `finished`) VALUES (?,?,?);');
$stmt->execute([$code,$title,$finished]);

// Get largest course id, this is the last inserted.
$courseIdStatement = $pdo->prepare('SELECT id FROM courses ORDER BY id DESC');
$courseIdStatement->execute();
$courseInsertedId = $courseIdStatement->fetch()['id'];


// Now insert a relation between account and courses
$relationStatement = $pdo->prepare('INSERT INTO `accounts_courses_relation` (`account_id`, `course_id`) VALUES (?,?);');
$relationStatement->execute([$user_id,$courseInsertedId]);
//$stmt->fetch();

?>
