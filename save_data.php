<?php
// header('Access-Control-Allow-Origin: *');
include('db_connection.php');
 $json = file_get_contents('php://input');
  
  $data = json_decode($json, true);
  $stmt = $conn->prepare("INSERT INTO calc_tb (input_value,output_value) 
  VALUES (:input_value,:output_value)");
  $stmt->bindParam(':input_value', $input);
  $stmt->bindParam(':output_value', $result);
 
  $result = $data['result'];
  $input = $data['input'];
 
  
  $stmt->execute();
  
  $msg = "New record created successfully";
?>