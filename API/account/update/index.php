<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Headers');
//header('Content-Type: application/json');


include '../../database.php'; // database connection configuration, instantiates $pdo

// Get the input from POST
$input = array();
if (isset($_POST['fullname'])) {$input['fullname'] = $_POST['fullname']; }
if (isset($_POST['institution_id'])) $input['institution_id'] = $_POST['institution_id'];
if (isset($_POST['email'])) $input['email'] = $_POST['email'];
if (isset($_POST['program'])) $input['program'] = $_POST['program'];
if (isset($_POST['GPA'])) $input['GPA'] = $_POST['GPA'];
if (isset($_POST['unitsCompleted'])) $input['unitsCompleted'] = $_POST['unitsCompleted'];
if (isset($_POST['id'])) {$input['id'] = $_POST['id']; }// This must be the last set.

// TODO, should probably do some data sanitation here.
$output = array();

$set = '';
foreach ($input as $key => $value) { // construct the query from input, setting only the values in input.
  if ($key != 'id') {
    if ($set != '') {
      $set = $set . ', ';
    }
  $set = $set . ' ' . $key. '=?';
  }
}

$parameters = array();
foreach ($input as $key => $value) { // Set the input parameters from input array.
array_push($parameters,$value);
}

$query = 'UPDATE accounts SET '.$set.' WHERE id = ?';

$statement = $pdo->prepare($query)->execute($parameters);

//$output = $statement->fetch(); // Store result in output

  //echo json_encode($output);

?>
